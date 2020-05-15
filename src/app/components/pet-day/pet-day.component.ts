import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';
import { DatePipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-pet-day',
  templateUrl: './pet-day.component.html',
  styleUrls: ['./pet-day.component.css']
})
export class PetDayComponent implements OnInit {
  public pet: Pet;
  public day: number;
  public date: Date;

  constructor(
    private petService: PetService
  ) {
    this.date = this.getDate();
    this.day  = this.getDay();
   }

  ngOnInit(): void {
    this.petService.petUrl + String(this.choosePet());
    this.getPet();
  }

  getPet() {
    this.petService.getPet(this.choosePet())
        .subscribe(pet => this.pet = pet);
  }

  getDate () {
    let date : Date = new Date();
    return date;
  }

  getDay () {
    let date : Date = this.getDate();
    let day : number = date.getDate();
    return day;
  }
  choosePet() {
    let max: number = 30;
    let min: number = 1;
    let petChoosen: number = this.day;

    if (petChoosen === 31) {
      return Math.random()*(max-min)+min;
    } else {
      return petChoosen;
    }
  }

}
