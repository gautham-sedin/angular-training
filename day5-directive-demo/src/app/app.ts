import { Component, signal } from '@angular/core';
import { TaskBoard } from './features/task-board/task-board';

@Component({
  selector: 'app-root',
  imports: [TaskBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day5-directive-demo');
}
