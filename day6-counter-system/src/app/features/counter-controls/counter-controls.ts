import { Component, inject } from '@angular/core';
import { Counter } from '../../core/services/counter';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})

export class CounterControls {
  counterService = inject(Counter);
}
