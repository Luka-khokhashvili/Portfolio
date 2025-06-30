import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  svglAngular,
  svglCss,
  svglExpo,
  svglExpressjsDark,
  svglHtml5,
  svglJavascript,
  svglPostgresql,
  svglRailwayDark,
  svglReact,
  svglSass,
  svglTailwindcss,
  svglTypescript,
  svglVercelDark,
} from '@ng-icons/svgl';
import {
  remixArrowLeftSLine,
  remixArrowRightUpBoxLine,
  remixArrowRightSLine,
} from '@ng-icons/remixicon';

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
      svglSass,
      svglPostgresql,
      svglRailwayDark,
      svglVercelDark,
      svglExpo,
      remixArrowLeftSLine,
      remixArrowRightSLine,
      remixArrowRightUpBoxLine,
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
      repo: '',
      stack: [
        'svglAngular',
        'svglExpressjsDark',
        'svglPostgresql',
        'svglVercelDark',
        'svglRailwayDark',
      ],
      iconTitles: ['Angular', 'Express.js', 'PostgreSQL', 'Vercel', 'Railway'],
    },
    {
      title: 'User Dashboard',
      description:
        'A simple Angular dashboard that displays a list of users, their posts, and their todo lists. Page has search functionality',
      imgsrc: 'User-Dashboard.png',
      link: 'https://angular-internship-task.vercel.app',
      repo: 'https://github.com/Luka-khokhashvili/Angular-Internship-Task.git',
      stack: ['svglAngular', 'svglTypescript', 'svglSass', 'svglVercelDark'],
      iconTitles: ['Angular', 'Typescript', 'SCSS', 'Vercel'],
    },
    {
      title: 'Job Listing app',
      description:
        'Simple Job listing page, with filtering and searching capabilites',
      imgsrc: 'Job-list.jpg',
      link: 'https://job-listings-app-gold.vercel.app',
      repo: 'https://github.com/Luka-khokhashvili/job-listings-app.git',
      stack: [
        'svglAngular',
        'svglTypescript',
        'svglTailwindcss',
        'svglVercelDark',
      ],
      iconTitles: ['Angular', 'Typescript', 'Tailwind', 'Vercel'],
    },
    {
      title: 'PC Configurator',
      description:
        'Pc configurator application, Build on Agular, using TypeScript, Router, NgRx and more tools. Please refer to README file for use guide',
      imgsrc: 'PC-configurator.png',
      link: '',
      repo: 'https://github.com/Luka-khokhashvili/Pc-configurator-app.git',
      stack: ['svglAngular', 'svglTypescript', 'svglTailwindcss'],
      iconTitles: ['Angular', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: 'NFT Preview Card app',
      description:
        'Simple Card component built using React and simple CSS styles',
      imgsrc: 'NFT-card.png',
      link: 'https://nft-preview-card-component-nine-flax.vercel.app/',
      repo: 'https://github.com/Luka-khokhashvili/nft-preview-card-component.git',
      stack: ['svglReact', 'svglCss', 'svglHtml5', 'svglVercelDark'],
      iconTitles: ['React', 'CSS', 'HTML5', 'Vercel'],
    },
  ];

  /**
   * Maps the project stack to an array of objects with names and titles.
   * The title is the name if no title is provided in the iconTitles array.
   */
  getIconPairs(projectStack: string[], iconTitles: string[]) {
    return projectStack.map((iconName, index) => ({
      name: iconName,
      title: iconTitles[index] || iconName,
    }));
  }

  goToProjectIndex(index: number) {
    this.currentIndex = index;
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.previous();
        break;
      case 'ArrowRight':
        this.next();
        break;
    }

    event.preventDefault();
  }
}
