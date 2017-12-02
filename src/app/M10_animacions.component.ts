import { Component } from '@angular/core';

@Component({
  selector: 'aplicacio',
  template: `
    <h2>Animacions </h2>
        
    <animacio [isVisible]="mostrarEfecte">
      DAW2
    </animacio>
    
    <button (click)="mostrarEfecte = !mostrarEfecte">mostrar efecte</button>

  `,
  styles: [`    
      animacio div {
        padding : 25px;
        background-color: #fdda8d;
      }
      
      animacio {
        background-color: #8a2be2;
        width: 100%;
        display: block;
        overflow: hidden;        
      }    
`
  ]
})
export class M10_Component {
  mostrarEfecte: boolean = true;
}
