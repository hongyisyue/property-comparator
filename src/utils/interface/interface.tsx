import { PropertyType } from "../enums/enum";

export interface Property {
    id?: number,
    location: string | undefined,
    type: PropertyType | string | undefined,
    year: number | string | undefined,
    size: number | string | undefined,
    room: number | string | undefined,
    bathroom: number | string | undefined,
    den: boolean | undefined,
    ac: boolean | undefined,
    parking: number | string | undefined,
    MOA: number | string | undefined,
    price: number | string | undefined,
    openHouse: string | undefined
}