import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/pet';
import { fadeIn } from '../animations';



@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
  animations: [fadeIn]
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;

  constructor() {}
  
    

  ngOnInit(): void {

   
  }
}


