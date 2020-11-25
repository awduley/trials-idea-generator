import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { HeadingComponent } from './heading/heading.component';
import { RiderComponent } from './rider/rider.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HeadingComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
