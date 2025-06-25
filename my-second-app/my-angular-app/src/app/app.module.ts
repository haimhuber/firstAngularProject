import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConferenceComponent } from './conference-screen/conference-screen/conference/conference.component';
import { PersonCardComponent } from './conference-screen/conference-screen/person-card/person-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConferenceComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // הוספת המודול של HTTP לאפליקציה
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
