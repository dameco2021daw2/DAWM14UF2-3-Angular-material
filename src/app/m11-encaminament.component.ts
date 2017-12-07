/*
 * Component que definex el marc per a fer uns encaminaments a altres components
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que definex el marc per a fer uns encaminaments a altres components
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'aplicacio',
  template: `
    <h1>{{titol}}</h1>
    <nav>
      <a routerLink="/salutacio" routerLinkActive="active">Salutacio</a>
      <a routerLink="/suma" routerLinkActive="active">Suma</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}