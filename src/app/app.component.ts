import { Component } from '@angular/core';
import { faHome, faDog, faCat, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string;

  faHome = faHome;
  faDog = faDog;
  faCat = faCat;
  faEye = faEye;
  
  
  constructor () {
    this.title = 'Fever Pets';
  }

}
