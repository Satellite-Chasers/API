import type { GridLocator, Satellite } from '../abstract'
// Example URL:
// https://sat.fg8oj.com/daily.php?e=0&ia=0&aa=360&l=FN41kr&a=0&u=America%2FNew_York&start=0&it=8&at=22&o=JSON&satlist=FM%60
export async function getSatellitesByGrid(grid:GridLocator):Promise<Satellite[]> {
    return [
        {
            name: 'RS-44',
            aos: 346,
            los: 196,
            aosTime: 1713960255,
            losTime: 1713961420,
            uplinkMhz: 432.125,
            downlinkMhz: 145.925,
        }
    ]
}
