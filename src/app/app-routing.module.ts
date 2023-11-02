import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';

//Defining routes to link them to various anchor tags
const routes: Routes = [
  {
    // Giving the home and landing page the social impact link for assesment purposes
    path: '',
    component: SocialImpactComponent
  },
  {
    path: 'aboutUs',
    component: AboutComponent
  },

  {
    path: 'socialImpact',
    component: SocialImpactComponent
  },
  {
    path: 'invest',
    component: InvestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
