import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  tasks = [
    { id: 1, title: 'Design UI', completed: false },
    { id: 2, title: 'Setup Backend', completed: true },
    { id: 3, title: 'Write Tests', completed: false }
  ];

  newTask = '';
  showCompleted = true;

  addTask() {
    if(this.newTask.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  toggleCompletedVisibility() {
    this.showCompleted = !this.showCompleted;
  }
}
