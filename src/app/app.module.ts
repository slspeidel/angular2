import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SlsOtherComponent } from './sls-other/sls-other.component';
import { SlsAnotherComponent } from './sls-other/sls-another.component';

@NgModule({
  declarations: [
    AppComponent,
    SlsOtherComponent,
    SlsAnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
