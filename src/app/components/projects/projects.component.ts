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
    // Add more as needed
  ];

  currentIndex = 0;

  get visibleProjects() {
    return this.projects.slice(0, 3); // Can handle overflow if needed
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevCard() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  getCardTransform(i: number): string {
    const offset = i - this.currentIndex;

    if (offset === 0) return 'translateY(0) scale(1)';
    if (offset === 1 || offset === -this.projects.length + 1)
      return 'translateY(20px) scale(0.95)';
    if (offset === 2 || offset === -this.projects.length + 2)
      return 'translateY(40px) scale(0.9)';

    return 'translateY(60px) scale(0.85) opacity(0)';
  }
}
