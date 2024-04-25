import { describe, it, expect } from 'vitest'
import {
  saveZipToGrid,
  getGridFromZip,
  savePhoneToGrid,
  getGridFromPhone,
} from '../src/services/storage'

describe('Storage interface', () => {
  it('Save zip to grid', async () => {
    let saved = false
    try {
      await saveZipToGrid('02720', 'FN41kr')
      saved = true
    } catch(e) {}
    expect(saved).toBe(true)
  })
  it('Get grid from zip', async () => {
    const grid = await getGridFromZip('02720')
    expect(grid).toBe('FN41kr')
  })
  it('Save phone to grid', async () => {
    let saved = false
    try {
      await savePhoneToGrid('+15551234567', 'FN41kr')
      saved = true
    } catch(e) {}
    expect(saved).toBe(true)
  })
  it('Get grid from phone', async () => {
    const grid = await getGridFromPhone('+15551234567')
    expect(grid).toBe('FN41kr')
  })
})
