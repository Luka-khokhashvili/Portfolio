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
  selector: 'app-tech-stack',
  imports: [NgIcon, CommonModule],
  templateUrl: './tech-stack.component.html',
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
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent {
  techStack = {
    Angular: 'svglAngular',
    'Express.js': 'svglExpressjsDark',
    React: 'svglReact',
    TailwindCSS: 'svglTailwindcss',
    TypeScript: 'svglTypescript',
    JavaScript: 'svglJavascript',
    HTML: 'svglHtml5',
    CSS: 'svglCss',
    PostgreSQL: 'svglPostgresql',
    Railway: 'svglRailwayDark',
    Vercel: 'svglVercelDark',
  };
}
