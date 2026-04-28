import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  // Form Definition
  taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    priority: new FormControl('medium', Validators.required),
    dueDate: new FormControl('', Validators.required)
  })

  // Convert form -> Signal
  formValue = toSignal(this.taskForm.valueChanges, {
    initialValue: this.taskForm.value
  });

  // Submit
  submit() {
    if(this.taskForm.invalid) return;

    console.log('Task Created', this.taskForm.value);

    this.taskForm.reset({
      priority: 'medium'
    });
  }
}
