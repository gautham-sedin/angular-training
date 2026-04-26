import { Injectable, signal, computed } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Project {

  // Writable Signal (your real state)
  projects = signal<{ id: number; name: string; status: string }[]>([]);

  isLoading = signal(true);
  showCompleted = signal(true);
  newProject = signal('');

  // 🔹 Simulated API
  private projects$ = of([
    { id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
  ]).pipe(delay(2000));

  constructor() {
    // Load API data INTO writable signal
    this.projects$.subscribe(data => {
      this.projects.set(data);
      this.isLoading.set(false);
    });
  }

  // 🔹 Derived
  totalProjects = computed(() => this.projects().length);

  completedProjects = computed(() =>
    this.projects().filter(p => p.status === 'completed').length
  );

  activeProjects = computed(() =>
    this.projects().filter(p => p.status === 'active').length
  );

  filteredProjects = computed(() =>
    this.projects().filter(p =>
      this.showCompleted() || p.status !== 'completed'
    )
  );

  // 🔹 Actions
  updateInput(value: string) {
    this.newProject.set(value);
  }

  addProject() {
    const name = this.newProject().trim();
    if (!name) return;

    this.projects.update(p => [
      ...p,
      { id: Date.now(), name, status: 'active' }
    ]);

    this.newProject.set('');
  }

  toggleCompleted() {
    this.showCompleted.update(v => !v);
  }

  toggleProjectStatus(projectId: number) {
    this.projects.update(projects =>
      projects.map(p =>
        p.id === projectId
          ? {
              ...p,
              status: p.status === 'active' ? 'completed' : 'active'
            }
          : p
      )
    );
  }
}