import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})

export class TaskManager {

  // Reactive State
  tasks = signal([
    { id: 1, title: 'Design UI', completed: false },
    { id: 2, title: 'Setup Backend', completed: true },
    { id: 3, title: 'Write tests', completed: false },
  ]);

  newTask = signal('');
  showCompleted = signal(true);

  // Derived State
  completedCount = computed(() =>
    this.tasks().filter(t => t.completed).length
  );

  activeCount = computed(() =>
    this.tasks().filter(t => !t.completed).length
  );

  filteredTasks = computed(() =>
    this.tasks().filter(t => 
      this.showCompleted() || !t.completed
    )
  );

  // Debug and Logging - (Side Effect)
  constructor() {
    effect(() => {
      console.log('Task updated:', this.tasks());
    });
  }

  // Actions
  addTask() {
    const title = this.newTask().trim();
    if(!title) return;

    this.tasks.update(tasks =>[
      ...tasks,
      { id: Date.now(), title, completed: false }
    ]);

    this.newTask.set('');
  }

  toggleTask(taskId: number) {
    this.tasks.update(tasks =>
      tasks.map(t => 
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  }

  toggleCompletedVisibility() {
    this.showCompleted.update(v => !v);
  }

  updateInput(value: string) {
    this.newTask.set(value);
  }
}