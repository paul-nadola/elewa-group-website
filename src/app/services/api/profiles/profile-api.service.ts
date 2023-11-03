import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileAPIService {
  // declaring the base url to consume our resources
  private baseUrl: string = 'http://localhost:3000/profiles'

  constructor(
    //using the HttpClient class to instantiate a variable for fetch requests
    private http: HttpClient
  ) { }
  getAllProfiles() {
    return this.http.get(`${this.baseUrl}`)
  }
}
