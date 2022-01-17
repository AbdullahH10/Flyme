export interface Flight {
    id?: number,
    origin: string,
    destination: string,
    flightid: number,
    depart: Date,
    arrive: Date,
    nonstop: boolean
}