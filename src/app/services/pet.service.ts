import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pet } from '../models/pet';


@Injectable()
export class PetService{
    public url: string;
    public log;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }
    // IMPORTANT!!! After testing it implements page number to upload only the pets per page (limit)
    // define const url = '?_page='
    getPets(): Observable<Pet[]> {
        return this._http.get<Pet[]>(this.url)
            .pipe(
                catchError(this.handleError<Pet[]>('getPets', []))
            );
    }

    getPet(id: number): Observable<Pet> {
        const url = `${this.url}/${id}`;
        return this._http.get<Pet>(url).pipe(
            tap(_ => this.log(`fetched pet id=${id}`)),
            catchError(this.handleError<Pet>('getPet id=${id}'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}