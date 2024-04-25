import type { PhoneNumber, GridLocator, ZipCode } from '../abstract'

export async function saveZipToGrid(zip:ZipCode, grid:GridLocator):Promise<void> {
    console.log(`[MOCK] Saved grid ${grid} for zip code ${zip}`)
}

export async function getGridFromZip(zip:ZipCode):Promise<GridLocator|null> {
    if (zip === '02720') {
        return 'FN41kr'
    }
    return null
}

export async function savePhoneToGrid(phoneNumber:PhoneNumber, grid:GridLocator):Promise<void> {
    console.log(`[MOCK] Saved grid ${grid} for phone number ${phoneNumber}`)
}

export async function getGridFromPhone(phoneNumber:PhoneNumber):Promise<GridLocator|null> {
    if (phoneNumber === '+15551234567') {
        return 'FN41kr'
    }
    return null
}
