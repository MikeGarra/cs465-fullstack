import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Trip } from '../models/trip';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

@Injectable()
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`,
    });
    return this.http
      .post(this.tripUrl, formData, { headers: headers })
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip[]> {
    console.log('Inside TripDataService#updateTrip');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`,
    });
    return this.http
      .put(this.tripUrl + formData.code, formData, { headers: headers })
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response as AuthResponse)
      .catch(this.handleError);
  }
}
