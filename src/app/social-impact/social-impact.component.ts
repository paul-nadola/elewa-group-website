import { Component } from '@angular/core';
import { ContentAPIsService } from '../services/api/content/content-apis.service';

//Declaring an empty array to store our content for the page
interface ContentItem {
  id: number;
  section: string;
  socialHeroHeader: string;
  socialHeroText: string;
  // Add other properties as needed
}
@Component({
  selector: 'app-social-impact',
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.css']
})
  export class SocialImpactComponent {
  content: ContentItem[] = []

  constructor(
    private service: ContentAPIsService
  ) {
    this.service.getAllTextContent('Social Impact').subscribe(data => {
      console.log(data)
      if (Array.isArray(data)) {
        this.content = data; // Assign the data to the content array
      }
    });
  }

}
