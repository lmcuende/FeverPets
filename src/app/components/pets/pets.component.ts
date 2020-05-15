import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Pet } from '../../models/pet';
import { Url } from '../../models/url';
import { PetService } from '../../services/pet.service';
import { MessageService } from '../../services/message.service';
import { fadeIn } from '../animations';
import { HttpHeaders } from '@angular/common/http';
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  animations: [fadeIn]
})

export class PetsComponent implements DoCheck, OnChanges, OnInit {
  public limit: number;
  public nextUrl;
  pets: Pet[];
  selectedPet: Pet;
  public headers;
  error: any;
  public url : Url;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  
  constructor(
    private petService: PetService,
    private messageService: MessageService
  ) { 
    this.limit = 10;
  }
  ngOnChanges(changes: SimpleChanges) {
    
    this.showConfigResponse();
    localStorage.setItem('headers',this.headers[3]);
  }
  
  ngOnInit() {
    this.getPets();
    this.showConfigResponse();
  }
  
  ngDoCheck() {
    let ur;
    let arr;
    this.showConfigResponse();
    ur = this.headers[3];
    arr = this.parse_link_header(ur);
    this.url = arr;
    if (this.url.first) {
      this.url.first = this.url.first.slice(6);
      // this.url.first = this.url.first.slice(0, -8);
      localStorage.setItem('firstUrl', this.url.first);
    }
    if (this.url.prev) {
      // this.url.prev = this.url.prev.slice(0, -8);
      localStorage.setItem('prevUrl', this.url.prev);
    }
    if (this.url.next) {
      // this.url.next = this.url.next.slice(0, -8);
      localStorage.setItem('nextUrl', this.url.next);
    }
    if (this.url.last) {
      // this.url.last = this.url.last.slice(0, -8);
      localStorage.setItem('lastUrl', this.url.last);
    }
  }


  savePet() {
    localStorage.setItem('pet', JSON.stringify(this.selectedPet));
  }

  savePets() {
    localStorage.setItem('pets', JSON.stringify(this.pets));
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
    let p: Pet = pet;
    
    let value = p.weight / (p.height * p.length);
    
    if (p.kind == "cat" && p.number_of_lives == 1) {
      this.selectedPet.health = "unhealthy";
    } else if (value < 2 || value > 5) {
        this.selectedPet.health = "unhealthy";
      } else if (value >= 2 && value <= 5) {
          this.selectedPet.health = "very healthy";
        } else {
            this.selectedPet.health = "healthy";
          }
  }

  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }

  getFirstPage() {
    let uri: string = localStorage.getItem('firstUrl');
    if (uri) {
      this.petService.petsUrl = uri;
      this.getPets();
    }
  }

  getNextPage() {
    let uri: string = localStorage.getItem('nextUrl');
    if (uri) {
      this.petService.petsUrl = uri;
      this.getPets();
    }
  }

  getPrevPage() {
    let uri: string = localStorage.getItem('prevUrl');
    if (uri) {
      this.petService.petsUrl = uri;
      this.getPets();
    }
  }

  getLastPage() {
    let uri: string = localStorage.getItem('lastUrl');
    if (uri) {
      this.petService.petsUrl = uri;
      this.getPets();
    }
  }


  showConfigResponse() {
    this.petService.getConfigResponse()
        .subscribe(resp => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
        });
  }

  parse_link_header(header) {
    if (header.length == 0) {
      return;
    }
    
    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links;
  }

  



}
