import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-neon-name',
  imports: [CommonModule],
  templateUrl: './neon-name.component.html',
  styleUrl: './neon-name.component.css',
})
export class NeonNameComponent {
  name = 'Luka Khokashvili'.split('');
  activeIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.name.length;
    }, 300);

    if (this.activeIndex == this.name.length) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
