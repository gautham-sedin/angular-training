import { Component, input, output } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight';
import { StatusPipe } from '../../shared/pipes/status-pipe';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [HighlightDirective, StatusPipe],
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