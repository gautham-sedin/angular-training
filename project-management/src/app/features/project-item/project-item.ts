import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  templateUrl: './project-item.html',
  styleUrls: ['./project-item.css']
})
export class ProjectItem {

  project = input<any>();
  toggle = output<number>();

  onToggle() {
    this.toggle.emit(this.project().id);
  }
}