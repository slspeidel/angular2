import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SlsOtherComponent } from './sls-other/sls-other.component';
import { SlsAnotherComponent } from './sls-other/sls-another.component';
import { SlsDatabindingComponent } from './sls-databinding/sls-databinding.component';
import { SlsPropertyBindingComponent } from './sls-databinding/sls-property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SlsOtherComponent,
    SlsAnotherComponent,
    SlsDatabindingComponent,
    SlsPropertyBindingComponent
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
