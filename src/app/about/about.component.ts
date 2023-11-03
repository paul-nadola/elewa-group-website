import { Component } from '@angular/core';
import { ContentAPIsService } from '../services/api/content/content-apis.service';
import { ProfileAPIService } from '../services/api/profiles/profile-api.service';

//Declaring an interface to match data from the server
interface ContentItem {
  id: number;
  section: string;
  aboutUsHeroHeader: string;
  aboutUsHeroText: string;
  aboutUsHeroFooter: string;
}
//profile interface
interface ProfileItems {
  id: number;
  name: string;
  role: string;
  ImageUrl: string;
  
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    //Declaring an array that will store our array of objects
  content: ContentItem[] = []
  profiles:ProfileItems[] =[]

  constructor(
    private service: ContentAPIsService,
    private profileService: ProfileAPIService
  ) {
    this.service.getAllTextContent('About Us').subscribe(data => {
      //passing the section parameter to filter the particular data set
      console.log(data)
      if (Array.isArray(data)) {
        this.content = data; // Assign the data to the content array
      }
    });
    this.profileService.getAllProfiles().subscribe((res)=>{
      console.log("profiles", res);
      // asserting type of variable being assigned to the profiles array
      this.profiles = res as ProfileItems[];
      console.log(this.profiles)
    })
  }

}
