import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MaterializeInputModule, MaterializeSelectModule } from 'materialize-angular';
import {ReactiveFormsModule} from '@angular/forms';
import  {ContactService} from './contact.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ReactContactComponent } from './react-contact/react-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ReactContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterializeSelectModule,
    MaterializeInputModule,
    ReactiveFormsModule,


  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
