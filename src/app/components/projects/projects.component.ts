import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  svglAngular,
  svglCss,
  svglExpressjsDark,
  svglHtml5,
  svglJavascript,
  svglPostgresql,
  svglRailwayDark,
  svglReact,
  svglTailwindcss,
  svglTypescript,
  svglVercelDark,
} from '@ng-icons/svgl';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      svglAngular,
      svglExpressjsDark,
      svglReact,
      svglTailwindcss,
      svglTypescript,
      svglJavascript,
      svglHtml5,
      svglCss,
      svglPostgresql,
      svglRailwayDark,
      svglVercelDark,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  expanded = false;
  currentIndex = 0;

  projects = [
    {
      title: 'G2 Development',
      description:
        'Full-stack informational website, built for G2 development with Angular, Express, PostgreSQL',
      imgsrc: 'G2-ss.png',
      link: 'https://g2-development.vercel.app/',
      repo: 'test',
      stack: [
        'svglAngular',
        'svglExpressjsDark',
        'svglPostgresql',
        'svglVercelDark',
        'svglRailwayDark',
      ],
    },
    {
      title: 'PC Configurator',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgsrc: '',
      link: '',
      repo: 'https://github.com/Luka-khokhashvili/Pc-configurator-app.git',
      stack: [
        'svglAngular',
        'svglExpressjsDark',
        'svglPostgresql',
        'svglVercelDark',
        'svglRailwayDark',
      ],
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
