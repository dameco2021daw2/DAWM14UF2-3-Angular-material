import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


import { Http } from '@angular/http';

@Injectable()
export class HttpDAOService {

  private httpDAO: Http;

  constructor(private http: Http) {
    this.httpDAO = http;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error produït', error);
    return Promise.reject(error.message || error);
  };

  consultarAlumnes() {
    const href = 'api/consultarAlumnes';
    const requestUrl = `${href}`;
    var alumnes: Alumne[] = []

    this.http.get(requestUrl)
      .map(response => response.json() as Alumne[]).subscribe((res => {
        res.forEach(element => {
          alumnes.push(element);
        });
      }));
    return alumnes;
  }


  esborrarAlumne(alumne: Alumne) {
    this.http.get(`api/esborrarAlumne?idr=${alumne.id}`)
    .subscribe(response => response.json() as Alumne)  
  }
}

export class Alumne {
    id:number;
    nom:string;
}