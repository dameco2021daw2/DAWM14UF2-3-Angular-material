/*
 * Component que te la lògica del component compte enrera,
 * mostra con es generen esdeveniments i es controlen propietats
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component que te la lògica del component compte enrera,
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'comptador',
    template: `
    <div>
      <h1> {{segons}} </h1>
    </div>
    `,
    styles: ['h1 { color: #900 }'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CompteEnrera_Component {
    @Input() segons: number=60; //si no es defineix la prop d'entrada val 60
    
    @Output() completat: EventEmitter<any> = new EventEmitter();
    @Output() progres: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        let timer = Observable.timer(2000,1000);
        timer.subscribe(this.tick);
    }
    private tick(): void {

        if (--this.segons < 1) {
            clearInterval(this.intervalId);
            this.completat.emit(null);

        }
        this.progres.emit(this.segons);
    }
}
