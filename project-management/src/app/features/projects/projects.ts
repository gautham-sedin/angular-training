import { Component, inject } from '@angular/core';
import { ProjectList } from '../project-list/project-list';
import { Project } from '../../core/services/project';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [ReactiveFormsModule, ProjectList],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectService = inject(Project);

  projectForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  addProject() {
    if(this.projectForm.invalid) return;

    this.projectService.addProject(this.projectForm.value.name!);

    this.projectForm.reset();
  }
}
