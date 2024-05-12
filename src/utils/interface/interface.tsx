import { PropertyType } from "../enums/enum";

export interface Property {
    id?: number,
    location: string | undefined,
    type: PropertyType | undefined,
    year: number | undefined,
    size: number | undefined,
    room: number | undefined,
    bathroom: number | undefined,
    den: boolean | undefined,
    ac: boolean | undefined,
    parking: number | undefined,
    MOA: number | undefined,
    price: number | undefined,
    openHouse: string | undefined
}