import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerBoxComponent } from './components/landing-page/inner-box/inner-box.component';
import { InnerDescriptionComponent } from './components/landing-page/inner-description/inner-description.component';
import { InnerFormComponent } from './components/landing-page/inner-form/inner-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerBoxComponent,
    InnerDescriptionComponent,
    InnerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
