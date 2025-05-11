import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    ContactMeComponent,
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

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
