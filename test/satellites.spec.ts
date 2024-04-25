import { describe, it, expect } from 'vitest'
import { getSatellitesByGrid } from '../src/services/satellites'

describe('Satellite relay', () => {
  it('Fetch satellites by grid locator', async () => {
    const satellites = await getSatellitesByGrid('FN41kr')
    expect(satellites).toHaveLength(1)
  })
})
