import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { M09_Alumne }         from './M09_alumne';
import { M09_AlumneService }  from './M09_alumne.service';
@Component({
  moduleId: module.id,
  selector: 'alumne-detall',
  templateUrl: './M09_alumne-detall.component.html',
  styleUrls: [ './M09_alumne-detall.component.css' ]
})
export class M09_AlumneDetallComponent implements OnInit {
  alumne: M09_Alumne;

  constructor(
    private AlumneService: M09_AlumneService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.AlumneService.obtenirAlumne(+params['id']))
      .subscribe(alumne => this.alumne = alumne);
  }

  goBack(): void {
    this.location.back();
  }
}
