import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flight } from './flight.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.flightRepository.findOne(id);
  }

  async getFlightOrigins(): Promise<String[]> {
    return this.flightRepository.query('SELECT DISTINCT origin FROM flight');
  }

  async getFlightDestinations(): Promise<String[]> {
    return this.flightRepository.query('SELECT DISTINCT destination FROM flight');
  }


  async createFlight(flight: Flight): Promise<any> {
    return await this.flightRepository.save(flight);
  }

  async readFlight(orig: string, dest: string): Promise<any> {
    return await this.flightRepository.find({origin: orig, destination: dest});
  }

  async updateFlight(flight: Flight): Promise<UpdateResult> {
    return await this.flightRepository.update(flight.id,flight);
  }

  async deleteFlight(id: number): Promise<any> {
    return this.flightRepository.delete(id);
  }

}