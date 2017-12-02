import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `
      <h2>LLista Alumnes</h2>
      <p *ngFor="let alumne of alumnes | orderby:'!n'">
        nom : {{alumne.n}}
      </p>
    `    
})
export class M08_Component{
	articles:Array<any>
    	alumnes = [
    { i: 11, n: 'Sergi' },
    { i: 12, n: 'Joan' },
    { i: 13, n: 'Anna' },

  ];
}