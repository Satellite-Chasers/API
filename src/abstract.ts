export type JWT = string
export type ZipCode = string
export type GridLocator = string
export type PhoneNumber = string

export type UnixTimestamp = number // in seconds

export type Satellite = {
    name: string
    aos: number
    los: number
    aosTime: UnixTimestamp
    losTime: UnixTimestamp
    uplinkMhz: number 
    downlinkMhz: number 
}
