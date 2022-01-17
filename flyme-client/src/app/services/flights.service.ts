import { Flight } from './../models/flight.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  backendURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backendURL}/flights`);
  }

  getAllOrigins():Observable<any> {
    return this.http.get(`${this.backendURL}/flights/cities/origins`);
  }

  getAllDestinations():Observable<any> {
    return this.http.get(`${this.backendURL}/flights/cities/destinations`);
  }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backendURL}/flights/query/${orig}/${dest}/`);
  }


  createFlight(flight: Flight): void {
    this.http.post(`${this.backendURL}/flights/`,flight).subscribe( () =>{ console.log("sent data to server via post request.")});
  }

  updateFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.backendURL}/flights/${flight.id}/update`,flight);
  }

  deleteFlight(id: any): Observable<any> {
    return this.http.post(`${this.backendURL}/flights/${id}/delete`,null);
  }
}
