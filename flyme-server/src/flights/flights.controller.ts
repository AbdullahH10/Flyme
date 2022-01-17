import { FlightsService } from './flights.service';
import { Flight } from './flight.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Request } from '@nestjs/common';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get("/:id/")
  findOne(@Param() param): Promise<Flight[]> {
    return this.flightService.findOne(param.id);
  }

  @Get('/cities/origins')
  getOrigins(): Promise<String[]> {
    return this.flightService.getFlightOrigins();
  }

  @Get('/cities/destinations')
  getDestinations(): Promise<String[]> {
    return this.flightService.getFlightDestinations();
  }

  @Post()
  async createFlight(@Body() flight: Flight): Promise<Flight[]> {
    return this.flightService.createFlight(flight);
  }

  @Get('/query/:orig/:dest/')
  async readFlight(@Param('orig') orig,@Param('dest') dest): Promise<any> {
    return this.flightService.readFlight(orig,dest);
  }

  @Post('/:id/update/')
  async updateFlight(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.updateFlight(flight);
  }
  
  @Post('/:id/delete/')
  async deleteFlight(@Param('id') id): Promise<any> {
    return this.flightService.deleteFlight(id);
  }
}