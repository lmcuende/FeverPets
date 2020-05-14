import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  public petsUrl: string = GLOBAL.url + "?_page=1";
  public first: string = "";
  public prev:  string = "";
  public next:  string = "";
  public last:  string = "";
  
   

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
      
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
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

  public getFirstPage(){
    
    return this.http.get<Pet[]>(this.petsUrl,{ observe: 'response' }).pipe(tap(res => {
      const Link  = this.parse_link_header(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];
    }));
  }
  
  public getNextPage(url: string){
    return this.http.get<Pet[]>(url,{ observe: 'response' }).pipe(tap(res => {
      const Link  = this.parse_link_header(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];       
    }));    
  }

  public getConfigResponse(): Observable<HttpResponse<Pet[]>> {
    return this.http.get<Pet[]>(
      this.petsUrl, { observe: 'response' }
    );
  }

  getPets(): Observable<Pet[]> {
  
    return this.http.get<Pet[]>(this.petsUrl)
               .pipe(
                 tap(_ => this.log('fetched pets')),
                 catchError(this.handleError<Pet[]>('getPets', []))
               );
  
  }

  private log(message: string) {
      this.messageService.add(`PetService: ${message}`);
  }

getFirstUrl() {
  let url = localStorage.getItem('firstUrl');
  if(url != "undefined") {
      this.first = url;
  } else {
      this.first = null;
  }
  return this.first;
}

getLastUrl() {
  let url = localStorage.getItem('lastUrl');
  if(url != "undefined") {
      this.last = url;
  } else {
      this.last = null;
  }
  return this.last;
}

getPrevUrl() {
  let url = localStorage.getItem('prevtUrl');
  if(url != "undefined") {
      this.prev = url;
  } else {
      this.prev = null;
  }
  return this.prev;
}

getNextUrl() {
  let url = localStorage.getItem('nextUrl');
  if(url != "undefined") {
      this.next = url;
  } else {
      this.next = null;
  }
  return this.next;
}




}