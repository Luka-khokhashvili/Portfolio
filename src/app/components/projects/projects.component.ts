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
      title: 'G2 Development',
      description:
        'Full-stack informational website, built for G2 development with Angular, Express, PostgreSQL',
      imgsrc: 'G2-ss.png',
      link: 'https://g2-development.vercel.app/',
      repo: '',
    },
    {
      title: 'PC Configurator',
      description: 'Real-time PC build tool with Angular Signals',
      imgsrc: '',
      link: '',
      repo: 'https://github.com/Luka-khokhashvili/Pc-configurator-app.git',
    },
    {
      title: 'NoteKeeper',
      description: 'Rich-text Angular app for managing daily notes',
      imgsrc: '',
      link: '',
      repo: '',
    },
    {
      title: 'Room Showcase',
      description: 'Full-stack project for a construction company',
      imgsrc: '',
      link: '',
      repo: '',
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
