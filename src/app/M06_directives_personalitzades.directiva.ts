import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[marcat]' })
export class M06_Directiva {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
