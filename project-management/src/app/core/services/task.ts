import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task {

  tasks = signal([
    { id: 1, title: 'Design UI', completed: false },
    { id: 2, title: 'Setup Backend', completed: true },
    { id: 3, title: 'Write tests', completed: false },
  ]);

  newTask = signal('');
  showCompleted = signal(true);

  // Derived
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

  // Actions
  updateInput(value: string) {
    this.newTask.set(value);
  }

  addTask() {
    const title = this.newTask().trim();
    if (!title) return;

    this.tasks.update(tasks => [
      ...tasks,
      { id: Date.now(), title, completed: false }
    ]);

    this.newTask.set('');
  }

  toggleTask(taskId: number) {
    this.tasks.update(tasks =>
      tasks.map(t =>
        t.id === taskId
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  }

  toggleCompletedVisibility() {
    this.showCompleted.update(v => !v);
  }
}