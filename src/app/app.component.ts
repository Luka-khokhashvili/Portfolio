import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';

  showScrollTop = false;

  teckStackIcons = [
    'svglAngular',
    'svglExpressjsDark',
    'svglReact',
    'svglTailwindcss',
    'svglTypescript',
    'svglJavascript',
    'svglHtml5',
    'svglCss',
    'svglPostgresql',
    'svglRailwayDark',
    'svglVercelDark',
  ];

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

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
