import { Component, signal } from '@angular/core';
import { TaskForm } from './features/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day9-task-form');
}
