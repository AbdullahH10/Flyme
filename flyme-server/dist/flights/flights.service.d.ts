import { Repository, UpdateResult } from 'typeorm';
import { Flight } from './flight.entity';
export declare class FlightsService {
    private readonly flightRepository;
    constructor(flightRepository: Repository<Flight>);
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<any>;
    getFlightOrigins(): Promise<String[]>;
    getFlightDestinations(): Promise<String[]>;
    createFlight(flight: Flight): Promise<any>;
    readFlight(orig: string, dest: string): Promise<any>;
    updateFlight(flight: Flight): Promise<UpdateResult>;
    deleteFlight(id: number): Promise<any>;
}
