import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UmlComponent } from './uml/uml.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartScreenComponent,
    UmlComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
