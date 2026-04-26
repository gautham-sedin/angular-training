import { Component, inject } from '@angular/core';
import { Counter } from '../../core/services/counter';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})

export class CounterDisplay {
  counterService = inject(Counter);
}
