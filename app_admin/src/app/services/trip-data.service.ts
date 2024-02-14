import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trip } from '../../../models/trip';

@Injectable()
export class TripDataService {
  constructor(private http: HttpClient) {}

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip[]> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip[]> {
    console.log('Inside TripDataService#updateTrip');
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}