import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManager } from "./features/task-manager/task-manager";

@Component({
  selector: 'app-root',
  imports: [TaskManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day3-task-manager');
}
