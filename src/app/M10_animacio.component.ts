import { 
    Component, Input, 
    trigger, state, animate, transition, style 
} from '@angular/core';

@Component({
  selector : 'animacio',
  animations: [
    trigger('ferEfecte', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ],
  template: `
    <div [@ferEfecte]="isVisible" >
      <ng-content></ng-content>    
      <p>Animacions amb Angular 2...</p>
    </div>
  `
})
export class M10_AnimacioComponent {
  @Input() isVisible : boolean = true;
}