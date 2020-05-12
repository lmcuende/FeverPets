import { Component } from '@angular/core';
import { faHome, faDog, faCat } from '@fortawesome/free-solid-svg-icons';

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
  
  constructor () {
    this.title = 'Fever Pets';
  }

}
