import { Component } from '@angular/core';

export class Alumne {
  id: number;
  nom: string;
}

@Component({
  selector: 'aplicacio',
  template: `
      <p>expressió: {{estatVisible}}</p>
        <button (click)="dada=2">dada 2</button>
              <button (click)="dada=3">dada 3</button>
      <button (click)="veureInfo()">Mostrar info</button>
        <div *ngIf="estatVisible">
          <h2 [ngStyle]="{'color': color}">Angular2!</h2>
        </div>
        <ul [ngClass]="blau">
          <li *ngFor="let alumne of alumnes; let i = index">
          Alumne #{{i}} {{alumne.nom}}
          </li>
        </ul>

        <div [ngSwitch]="dada">
  <p *ngSwitchCase="2">2</p>
  <ng-container *ngSwitchCase="3">
    <h2>dada</h2>
    <p>3</p>
  </ng-container>
  <p *ngSwitchDefault>senar</p>
</div>
  `})
export class M05_Component {
  color: string = 'red';
  dada:number=4;
  alumnes = [
    { id: 11, nom: 'Sergi' },
    { id: 12, nom: 'Joan' },
    { id: 13, nom: 'Anna' },

  ];
  estatVisible: boolean = false;
  veureInfo() {
    this.estatVisible = !this.estatVisible;
  }
}
