/*
 * Component que te la lògica del component compte enrera,
 * mostra con es generen esdeveniments i es controlen propietats
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component que te la lògica del component compte enrera,
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `
    <div>
    n1<input #n1  required />
    n2<input [(ngModel)]="n2" required />
    
    <button (click)="sumar(n1.value)"> suma </button>
    <button (click)="restar(n1.value)"> resta </button>
    
      <h1>el resultat és {{resultat}} </h1>

      <h1 *ngIf="resultat<0">el valor es negatiu</h1>
    </div>
    `,
    styles: ['h1 { color: #900 }']
})
export class M01_SumaComponent {
    
    private resultat: number;
    //private n1: number;
    private n2: number;
    constructor() {
        this.resultat = 0;
    }

    sumar(n:number): void {
        this.resultat = n * 1 + this.n2 * 1;
    }
    restar(n:number): void {
        this.resultat = n * 1 - this.n2 * 1;
    }

}
