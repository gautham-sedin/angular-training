import { Component, signal } from '@angular/core';
import { ProjectItem } from '../project-item/project-item';

@Component({
  selector: 'app-project-container',
  standalone: true,
  imports: [ProjectItem],
  templateUrl: './project-container.html',
  styleUrl: './project-container.css',
})
export class ProjectContainer {
  projects = signal([
    { id: 1, name: 'Build UI 2', status: 'active' },
    { id: 2, name: 'Write API', status: 'completed' },
    { id: 3, name: 'Deploy App', status: 'active' }
  ]);

  toggleProject(id: number) {
    this.projects.update(project =>
      project.map(p => 
        p.id === id
        ? {
          ...p,
          status: p.status === 'completed' ? 'active' : 'completed'
        }
        :p
      )
    );
  }
}
