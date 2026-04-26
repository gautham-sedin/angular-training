import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterDisplay } from './features/counter-display/counter-display';
import { CounterControls } from './features/counter-controls/counter-controls';

@Component({
  selector: 'app-root',
  imports: [CounterDisplay, CounterControls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day6-counter-system');
}
