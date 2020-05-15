import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



// Components
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';


// Services
import { PetService } from './services/pet.service';
import { MessagesComponent } from './components/messages/messages.component';
import { PetDayComponent } from './components/pet-day/pet-day.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    PetDetailComponent,
    MessagesComponent,
    PetDayComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
