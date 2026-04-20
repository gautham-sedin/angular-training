import { Component } from '@angular/core';
import { TaskManager } from '../task-manager/task-manager';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskManager],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  projects = [
    { id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
  ];

  showCompleted = true;

  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }
}
