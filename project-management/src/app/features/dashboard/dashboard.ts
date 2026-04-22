import { Component, signal, computed } from '@angular/core';
import { ProjectList } from '../project-list/project-list';
import { TaskManager } from '../task-manager/task-manager';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskManager, ProjectList],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  // 🔹 Reactive State
  projects = signal([
    { id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
  ]);

  newProject = signal('');
  showCompleted = signal(true);

  // 🔹 Derived State
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
  addProject() {
    const name = this.newProject().trim();
    if(!name) return;

    this.projects.update(projects =>[
      ...projects,
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

  updateInput(value: string) {
    this.newProject.set(value);
  }
}