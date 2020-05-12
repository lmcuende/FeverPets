import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public title: string;
  public numbers = new Array(10);
  public pets: Pet[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petService: PetService
  ) {
      this.title = 'Pets list';
  }

  ngOnInit() {
    this._petService.getPets().subscribe(
      response => {
        this.pets = this.pets;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
