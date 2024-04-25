import type { PhoneNumber } from '../abstract'

export async function sendSMS(recipientPhoneNumber:PhoneNumber, smsBody:string):Promise<void> {
    console.log(
        `[MOCK] Sent SMS to ${recipientPhoneNumber}\n`,
        `--------------------------------------------\n`,
        smsBody + '\n',
        `--------------------------------------------\n`,
    )
}
