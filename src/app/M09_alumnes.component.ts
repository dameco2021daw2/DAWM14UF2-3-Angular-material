import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { M09_Alumne } from './M09_alumne';
import { M09_AlumneService } from './M09_alumne.service';

@Component({
  moduleId: module.id,
  selector: 'alumnes',
  templateUrl: './M09_alumnes.component.html',
  styleUrls: [ './M09_alumnes.component.css' ]
})
export class M09_AlumnesComponent implements OnInit {
  alumnes: M09_Alumne[];
  alumneSeleccionat: M09_Alumne;

  constructor(
    private router: Router,
    private alumneService: M09_AlumneService) { }

  getAlumnes(): void {
    this.alumneService.obtenirAlumnes().then(alumnes => this.alumnes = alumnes);
  }

  ngOnInit(): void {
    this.getAlumnes();
  }

  onSeleccionarAlumne(Alumne: M09_Alumne): void {
    this.alumneSeleccionat = Alumne;
  }

  anarAdetall(): void {
    this.router.navigate(['/detall', this.alumneSeleccionat.id]);
  }
}
