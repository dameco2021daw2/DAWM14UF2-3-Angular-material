import { Component } from '@angular/core';

export class Alumne {
  id: number;
  nom: string;
}

@Component({
  selector: 'aplicacio',
  template: `
    <h1>{{titol}}</h1>

    <ul>
      <li *ngFor="let alumne of alumnes">
        <span class="marca">{{alumne.id}}</span> {{alumne.nom}}
      </li>
    </ul>
  `
})
export class M04_Component_Llista {
  titol = 'DAW2';
  alumnes = [
    { id: 11, nom: 'Sergi' },
    { id: 12, nom: 'Joan' },
    { id: 13, nom: 'Anna' },

  ];
}
