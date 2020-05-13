import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';




@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  private petsUrl = GLOBAL.url + '?_page=1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getPets(): Observable<Pet[]> {
    
    return this.http.get<Pet[]>(this.petsUrl)
  }

  private log(message: string) {
    this.messageService.add(`PetService: ${message}`);
  }
}