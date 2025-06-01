import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowUpDoubleFill } from '@ng-icons/remixicon';
import { NeonNameComponent } from './components/helpers/neon-name/neon-name.component';

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
    NgIcon,
    NeonNameComponent,
  ],
  providers: [provideIcons({ remixArrowUpDoubleFill })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  showScrollTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
