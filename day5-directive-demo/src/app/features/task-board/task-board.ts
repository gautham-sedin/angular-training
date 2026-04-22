import { Component, signal } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight';
import { PriorityPipe } from '../../shared/pipes/priority-pipe';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [HighlightDirective, PriorityPipe],
  templateUrl: './task-board.html',
  styleUrls: ['./task-board.css']
})
export class TaskBoard {

  tasks = signal([
    { id: 1, title: 'Fix Login Bug', priority: 'high', completed: false },
    { id: 2, title: 'Update UI Design', priority: 'medium', completed: true },
    { id: 3, title: 'Write Unit Tests', priority: 'low', completed: false }
  ]);

}