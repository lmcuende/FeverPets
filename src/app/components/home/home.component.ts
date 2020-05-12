import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'Welcome to Fever Pets';
  constructor() { }

  ngOnInit(): void {
  }

}
