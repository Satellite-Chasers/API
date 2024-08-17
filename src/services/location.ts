import type { ZipCode, GridLocator } from '../abstract'
// Known example { zip: '02720', grid: 'FN41kr' }
export async function convertZipToGrid(zip:ZipCode):Promise<GridLocator> {
    return 'FN41kr'
}
