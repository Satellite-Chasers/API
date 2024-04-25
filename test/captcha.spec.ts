require('dotenv').config()
import jwt from 'jsonwebtoken'
import { describe, it, expect } from 'vitest'
import { verifyCaptcha } from '../src/services/captcha'

describe('Captcha verification', () => {
  it('Issue a valid JWT upon captcha validation', async () => {
    const token = await verifyCaptcha('abcxyz')
    let valid = false
    try {
      const { JWT_SECRET } = process.env as Record<string,string>
      const decoded = jwt.verify(token, JWT_SECRET)
      valid = true
    } catch(e) {}
    expect(valid).toBe(true)
  })
})
