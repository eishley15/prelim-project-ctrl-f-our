import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  onHomeClick(event: Event) {
    event.preventDefault();
    const currentUrl = this.router.url;
    
    if (currentUrl === '/' || currentUrl === '') {
      // Already on home page - scroll to top with animation
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Trigger re-animation of hero section
      setTimeout(() => {
        const heroElements = document.querySelectorAll('.animate-on-scroll');
        heroElements.forEach((el) => {
          el.classList.remove('animate-in');
          setTimeout(() => {
            el.classList.add('animate-in');
          }, 50);
        });
      }, 100);
    } else {
      // Navigate to home
      this.router.navigate(['/']).then(() => {
        // Scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100);
      });
    }
  }
}
