import { Component, inject } from '@angular/core';
import { ProjectList } from '../project-list/project-list';
import { TaskManager } from '../task-manager/task-manager';
import { Project } from '../../core/services/project';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskManager, ProjectList],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class Dashboard {
  projectService = inject(Project);
}