import { Component, inject } from '@angular/core';
import { Task } from '../../core/services/task';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})

export class TaskManager {
  taskService = inject(Task);
}