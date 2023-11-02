import { Component } from '@angular/core';
import { ContentAPIsService } from '../services/api/content/content-apis.service';

interface ContentItem {
  id: number;
  section: string;
  aboutUsHeroHeader: string;
  aboutUsHeroText: string;
  aboutUsHeroFooter: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    //Declaring an array that will store our array of objects
  content: ContentItem[] = []

  constructor(
    private service: ContentAPIsService
  ) {
    this.service.getAllTextContent('About Us').subscribe(data => {
      //passing the section parameter to filter the particular data set
      console.log(data)
      if (Array.isArray(data)) {
        this.content = data; // Assign the data to the content array
      }
    });
  }

}
