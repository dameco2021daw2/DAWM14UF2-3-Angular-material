import { Component, OnInit } from '@angular/core';

import { M09_Alumne } from './M09_alumne';
import { M09_AlumneService } from './M09_alumne.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './M09_dashboard.component.html',
  styleUrls: [ './M09_dashboard.component.css' ]
})
export class M09_DashboardComponent implements OnInit {

  alumnes: M09_Alumne[] = [];

  constructor(private alumneServei: M09_AlumneService) { }

  ngOnInit(): void {
    this.alumneServei.obtenirAlumnes()
      .then(alumnes => this.alumnes = alumnes.slice(1, 5));
  }
}
