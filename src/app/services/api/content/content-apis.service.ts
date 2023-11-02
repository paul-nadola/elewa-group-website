import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

interface ContentItem {
  id: number;
  section: string;
  socialHeroHeader: string;
  socialHeroText: string;
}
@Injectable({
  providedIn: 'root'
})
export class ContentAPIsService {
  // declaring the base url to consume our resources
  private baseUrl: string = 'http://localhost:3000/texts'
  content: ContentItem[] = []

  constructor(
    //using the HttpClient class to instantiate a variable for fetch requests
    private http: HttpClient
  ) { }
  
  getAllTextContent(section: string) {
    // Define the query parameter to filter by the "section" field
    const params = new HttpParams().set('section', section);
    
    // Use the query parameter in the request
    return this.http.get(`${this.baseUrl}`, { params })
  }
}
