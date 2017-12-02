import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'aplicacio',
  template: `
    <h1>{{titol}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/alumnes" routerLinkActive="active">Alumnes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./M09_routing.component.css'],
})
export class M09_Component {
  titol = 'Gestió Alumnes';
}