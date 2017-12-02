import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'aplicacio',
    template: `<h1> {{cadena | uppercase}}</h1>
              <h1>{{cadena | lowercase}}</h1>
              <h1>{{data | date:'MM/dd/yy'}}</h1>
                <h1>{{data | date:'shortTime'}}</h1>
              <h1>{{nombre | number:'2.0-1'}}</h1>
              <h1>{{nombre2 | number:'2.2-2'}}</h1>
              <h1>{{percentatge | percent:'2.1-2'}}</h1>
              <h1>{{import | currency:'EUR':true:'2.1-2'}}</h1>
              <h1>{{cadena | slice:1:3}}</h1>
              <h1>{{ {"nom":"sergi", "cognom":"grau"} | json }}</h1>
              `
})

export class M07_Component {
    cadena: string = "Daw2";
    nombre: number = 10.46;
    nombre2: number = 10.6;
    percentatge: number= 0.534123;
    data = new Date(1988, 3, 15); // Abril 15, 1988
    import:number=123;
}