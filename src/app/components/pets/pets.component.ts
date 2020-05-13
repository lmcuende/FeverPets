import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { MessageService } from '../../services/message.service';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  
})
export class PetsComponent implements OnInit {
  public limit: number;
  pets: Pet[];
  selectedPet: Pet;
  
  
  constructor(
    private petService: PetService,
    private messageService: MessageService
  ) { 
    this.limit = 10;
  }

  ngOnInit() {
    this.getPets();
    console.log('PetsComponent loaded');
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }

  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }



}
