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
    <h1>
   iterador
   </h1>
   <input #alumne />
   <button (click)="afegirAlumne(alumne.value)">afegir</button>
   <button (click)="esborrarAlumne(alumne.value)">esborrar</button>
   <table class="table table-striped">
   <thead class="thead-dark">
     <tr>
     <th scope="col">#</th>
       <th scope="col">Nom</th>
     </tr>
     <tbody>
   <tr *ngFor="let alumne of llistaAlumnes;index as i; first as isPrimer">
   <th scope="col">{{i+1}}</th>
    <td> {{alumne}}</td>
   </tr>
   </tbody>
   </table>
 
    `,
    styles: ['h1 { color: #900 }']
})
export class M02_IteradorComponent {
    
    llistaAlumnes: string[] = ['Joan', 'Sergi', 'Anna'];
    constructor() {    
    }
    afegirAlumne(alumne:string):void{
            this.llistaAlumnes.push(alumne);
    }
    esborrarAlumne(alumne:string){
        if(this.llistaAlumnes.indexOf(alumne)>=0){
            this.llistaAlumnes.splice(this.llistaAlumnes.indexOf(alumne), 1);
            
        }
    }


}
