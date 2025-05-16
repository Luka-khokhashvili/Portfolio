import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  svglTailwindcss,
  svglTypescript,
  svglVercelDark,
} from '@ng-icons/svgl';
import { remixArrowLeftSLine, remixArrowRightSLine } from '@ng-icons/remixicon';

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
      svglExpo,
      remixArrowLeftSLine,
      remixArrowRightSLine,
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
   * @description
   * Maps the project stack to an array of objects with names and titles.
   * The title is the name if no title is provided in the `iconTitles` array.
   * @param stack {string[]} The project stack as an array of icon names.
   * @param titles {string[]} The project stack as an array of titles.
   * @returns {Array<{name: string, title: string}>} An array of objects with names and titles.
   */
  getIconPairs(stack: string[], titles: string[]) {
    return stack.map((name, index) => ({
      name,
      title: titles[index] || name,
    }));
  }

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
