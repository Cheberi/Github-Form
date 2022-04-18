import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

//import the http NgModule
import { HttpModule } from '@angular/http';

//adding the ngmodel issue
import { FormsModule } from '@angular/forms';

//import the search SearchService with the code below
import { SearchService } from './search.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchService],//copied SearchService here to make it avalable throughout the app
  bootstrap: [AppComponent]
})
export class AppModule { }
