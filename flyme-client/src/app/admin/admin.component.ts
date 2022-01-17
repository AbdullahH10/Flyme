import { Flight } from './../models/flight.model';
import { FlightsService } from './../services/flights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  flights: Flight[] = [];

  origin: string = "";
  destination: string = "";
  flightid: number = 0;
  depart: Date = new Date();
  arrive: Date = new Date();
  nonstop: boolean = false;

  constructor(private readonly flightService: FlightsService) { }


  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.flightService.getAllFlights().subscribe(data => { this.flights = data; });
  }

  update(flight: Flight) {
    this.flightService.updateFlight(flight).subscribe(data => {
      if (data && data['affected']) {
        this.refresh();
      }
    })
  }

  delete(flight: Flight) {
    this.flightService.deleteFlight(flight.id).subscribe(data => {
      if (data && data['affected']) {
        this.refresh();
      }
    })
  }
  
  toggleNonStop() {
    this.nonstop = !this.nonstop;
  }

  createFlight() {
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightid: this.flightid,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.createFlight(flight);
  }

}
