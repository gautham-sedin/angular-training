import { Component, input, output } from '@angular/core';
import { ProjectItem } from '../project-item/project-item';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectItem],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectList {

  projects = input<any[]>();
  toggleProject = output<number>();

  onToggle(id: number) {
    this.toggleProject.emit(id);
  }
}