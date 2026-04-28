import { Component, inject } from '@angular/core';
import { Task } from '../../core/services/task';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})

export class TaskManager {
  taskService = inject(Task);

  taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  addTask() {
    if(this.taskForm.invalid) return;

    this.taskService.addTask(this.taskForm.value.title!);
    this.taskForm.reset();
  }
}