import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'TechStore App',
      description: 'E-commerce with Angular, Express, PostgreSQL',
    },
    {
      title: 'NoteKeeper',
      description: 'Rich-text Angular app for managing daily notes',
    },
    {
      title: 'PC Configurator',
      description: 'Real-time PC build tool with Angular Signals',
    },
    {
      title: 'Room Showcase',
      description: 'Full-stack project for a construction company',
    },
  ];

  currentIndex = 0;

  goTo(index: number) {
    this.currentIndex = index;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
