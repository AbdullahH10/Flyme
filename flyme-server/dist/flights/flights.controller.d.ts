import { FlightsService } from './flights.service';
import { Flight } from './flight.entity';
export declare class FlightsController {
    private readonly flightService;
    constructor(flightService: FlightsService);
    findAll(): Promise<Flight[]>;
    findOne(param: any): Promise<Flight[]>;
    getOrigins(): Promise<String[]>;
    getDestinations(): Promise<String[]>;
    createFlight(flight: Flight): Promise<Flight[]>;
    readFlight(orig: any, dest: any): Promise<any>;
    updateFlight(id: any, flight: Flight): Promise<any>;
    deleteFlight(id: any): Promise<any>;
}
