/*
 * Component embolcall que utilitza un subcomponent amb la lògica
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component embolcall que utilitza un subcomponent amb la lògica
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
@Component({
    selector: 'aplicacio',
    templateUrl: './M03_bindings_pomodoro.html'
})

export class M03_Component {
    onCompteEnreraFinalitza(): void {
        alert('Final!');
    }
}
