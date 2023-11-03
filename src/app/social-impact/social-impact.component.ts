import { Component } from '@angular/core';
import { ContentAPIsService } from '../services/api/content/content-apis.service';

//Declaring an interface to match data from the server
interface ContentItem {
  id: number;
  section: string;
  socialHeroHeader: string;
  socialHeroText: string;
  peopleTrained: number;
  trainedText: string;
  carreersLaunched: number;
  careerText:string;
  projectsFinished: number;
  projectText: string;
  investors:number;
  investText: string;
  businessSectionUrl: string;
  businessHeader: string;
  businessContent: string;
  objectiveHeader: string;
  objectiveText: string;
  objectiveImageUrl: string;
  givingBackImageUrl: string;
  givingBackHeader:string;
  givingBackText:string;
  identityText: string;
  identityHeader:string;
  identityUrl:string;
  impactProjectsText:string;
  callToActionText:string;
  VVOB: string;
  KSA: string;
  farmbetter: string;
  WWF: string;
  enabel: string;
  spotlights: string





}
@Component({
  selector: 'app-social-impact',
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.css']
})
  export class SocialImpactComponent {
    //Declaring an array that will store our array of objects
  content: ContentItem[] = []

  constructor(
    private service: ContentAPIsService
  ) {
    this.service.getAllTextContent('Social Impact').subscribe(data => {
    //passing the section parameter to filter the particular data set
      console.log(data)
      if (Array.isArray(data)) {
        this.content = data; // Assign the data to the content array
      }
    });
  }

}
