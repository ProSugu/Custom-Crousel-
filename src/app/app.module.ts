import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { Card1Component } from './carousel-home/card1/card1.component';
import { Card2Component } from './carousel-home/card2/card2.component';
import { Card3Component } from './carousel-home/card3/card3.component';
import { Card4Component } from './carousel-home/card4/card4.component';
import { Card5Component } from './carousel-home/card5/card5.component';
import { Card6Component } from './carousel-home/card6/card6.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarouselHomeComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
