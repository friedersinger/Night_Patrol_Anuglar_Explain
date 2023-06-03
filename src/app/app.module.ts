import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UmlComponent } from './uml/uml.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeComponent } from './time/time.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartScreenComponent,
    UmlComponent,
    NavbarComponent,
    TimeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
