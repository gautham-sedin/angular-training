import { Component, signal } from '@angular/core';
import { LiveSearch } from './features/live-search/live-search';

@Component({
  selector: 'app-root',
  imports: [LiveSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day7-live-searchengine');
}
