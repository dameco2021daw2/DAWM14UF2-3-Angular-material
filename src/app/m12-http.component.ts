/*
 * Component que mostra com fer peticions a un backend
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 20.12.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 20.12.2017
 * - Component que mostra com fer peticions a un backend
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import { HttpDAOService } from './httpdao.service';

@Component({
    selector: 'aplicacio',
    templateUrl: 'm03-iterador-component.html',
    styles: ['h1 { color: #900 }']
})
export class M12_Http {
    constructor(private httpDAO: HttpDAOService) {
    }
    
}
