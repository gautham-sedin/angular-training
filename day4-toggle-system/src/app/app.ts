import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectContainer } from './features/project-container/project-container';

@Component({
  selector: 'app-root',
  imports: [ProjectContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day4-toggle-system');
}
