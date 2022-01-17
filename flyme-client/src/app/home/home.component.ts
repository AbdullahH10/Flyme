import { Flight } from './../models/flight.model';
import { FlightsService } from '../services/flights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];
  uniqueOriginList: any[] = [];
  uniqueDestinationList: any[] = [];
  selectedOrigin: string = "";
  selectedDestination: string = "";

  constructor(private flightService :FlightsService) { }

  ngOnInit(): void {
    this.flightService.getAllOrigins().subscribe(data=>{this.uniqueOriginList = data});
    this.flightService.getAllDestinations().subscribe(data=>{this.uniqueDestinationList = data});
  }

  readFlight(): void {

    const orig = this.selectedOrigin;
    const dest = this.selectedDestination;

    this.flightService.getFlights(orig,dest).subscribe(data => {
      this.flights = data;
    })
  }
}
