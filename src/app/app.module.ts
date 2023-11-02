import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { ContentAPIsService } from './services/api/content/content-apis.service';

@NgModule({
  declarations: [
    // declaring our components for access by the app
    AppComponent,
    HeaderComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent
  ],
  imports: [
    BrowserModule,
    // routing module to assist in app navigation
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // Necessarry services to aid in CRUD operations
    ContentAPIsService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
