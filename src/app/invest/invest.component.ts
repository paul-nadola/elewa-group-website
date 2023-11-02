import { Component } from '@angular/core';
import { ContentAPIsService } from '../services/api/content/content-apis.service';

interface ContentItem {
  id: number;
  section: string;
  investHeroHeader: string;
  investHeroText: string;
  investHeroFooter: string;
}
@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {
    //Declaring an array that will store our array of objects
  content: ContentItem[] = []

  constructor(
    private service: ContentAPIsService
  ) {
    this.service.getAllTextContent('Invest').subscribe(data => {
      //passing the section parameter to filter the particular data set
      // console.log(data)
      if (Array.isArray(data)) {
        this.content = data; // Assign the data to the content array
      }
    });
  }

}
