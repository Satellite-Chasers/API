require('dotenv').config()
import express, { Request, Response } from 'express'
import { getGridFromPhone, savePhoneToGrid } from './services/storage'
import { convertZipToGrid } from './services/location'
import { sendSMS } from './services/notification'
import { getSatellitesByGrid } from './services/satellites'
import { verifyCaptcha } from './services/captcha'

const server = express()
server.use(express.json())

server.put('/profile', async (req:Request, res:Response) => {
    const { phoneNumber, zipCode } = req.body
    const prev = await getGridFromPhone(phoneNumber)
    const grid = await convertZipToGrid(zipCode)
    await savePhoneToGrid(phoneNumber, grid)
    // if no existing profile send 201 status
    const statusCode = !prev ? 201 : 200
    res.status(statusCode).send('ok')
})

server.post('/captcha', async (req:Request, res:Response) => {
    const { captchaCode } = req.body
    const jwt = await verifyCaptcha(captchaCode)
    if (!jwt) {
        res.status(400).send('invalid')
        return
    }
    res.status(200).send(jwt)
})

server.post('/hooks/twilio', async (req:Request, res:Response) => {
    const { senderPhoneNumber } = req.body
    const grid = await getGridFromPhone(senderPhoneNumber)
    if (!grid) {
        await sendSMS(senderPhoneNumber, 'You are not signed up')
        return
    }
    const satellites = await getSatellitesByGrid(grid)
    if (!satellites.length) {
        await sendSMS(senderPhoneNumber, 'No satellites in your area')
        return
    }
    // Format the SMS body
    const smsBody = 'Satellites overhead:\n' +
        satellites.map(s => ` ${s.name} - ${s.uplinkMhz} - ${s.downlinkMhz}`).join('\n')
    await sendSMS(senderPhoneNumber, smsBody)
    res.status(200).send('ok')
})

server.get('/grid/:zipCode', async (req:Request, res:Response) => {
    const { zipCode } = req.params
    const grid = await convertZipToGrid(zipCode)
    if (!grid) {
        res.status(404).send('not found')
        return
    }
    res.status(200).send(grid)
})

server.get('/satellites/:gridLocator', async (req:Request, res:Response) => {
    const { gridLocator } = req.params
    const satellites = await getSatellitesByGrid(gridLocator)
    res.status(200).send(satellites)
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`http://localhost:${port}`))
