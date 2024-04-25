import { describe, it, expect } from 'vitest'
import { convertZipToGrid } from '../src/services/location'

describe('Location translation', () => {
  it('Convert zip code to grid locator', async () => {
    const grid = await convertZipToGrid('02720')
    expect(grid).toBe('FN41kr')
  })
})
