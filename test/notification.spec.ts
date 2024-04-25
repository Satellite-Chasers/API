import { describe, it, expect } from 'vitest'
import { sendSMS } from '../src/services/notification'

describe('Notification dispatch', () => {
  it('Send an SMS with "hello world"', async () => {
    let sent = false
    try {
      await sendSMS('+15551234567', 'hello world')
      sent = true
    } catch(e) {}
    expect(sent).toBe(true)
  })
})
