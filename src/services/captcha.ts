import jwt from 'jsonwebtoken'
import type { JWT } from '../abstract'

export async function verifyCaptcha(captchaCode:string):Promise<JWT> {
    console.log(`[MOCK] Verified captcha code ${captchaCode}`)
    const { JWT_SECRET } = process.env as Record<string,string>
    const token = jwt.sign({ verified: true }, JWT_SECRET, { expiresIn: '5m' })
    console.log(`[MOCK] Generated JWT ${token}`)
    return token
}
