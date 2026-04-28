import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { Dashboard } from './features/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Sidebar, Dashboard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-management');
}
