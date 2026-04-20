import { Component, signal } from '@angular/core';
import { TaskManager } from './features/task-manager/task-manager';

@Component({
  selector: 'app-root',
  imports: [TaskManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
