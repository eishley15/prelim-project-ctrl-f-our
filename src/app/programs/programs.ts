import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-programs',
  imports: [Footer],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs implements OnInit, OnDestroy {
  private lastScrollTop = 0;
  private scrollTimeout: any;

  ngOnInit() {
    // Add animation class on initial load
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('animate-in');
      });
    }, 100);
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingUp = scrollTop < this.lastScrollTop;
    
    // Trigger animations when scrolling up (and not at the very top)
    if (isScrollingUp && scrollTop > 50) {
      this.triggerScrollUpAnimations();
    }
    
    // Also trigger animations for elements coming into view
    this.checkElementsInView();
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  private triggerScrollUpAnimations() {
    // Clear any existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Debounce scroll events
    this.scrollTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !el.classList.contains('animate-in')) {
          el.classList.add('animate-in');
        }
      });
    }, 50);
  }

  private checkElementsInView() {
    const elements = document.querySelectorAll('.animate-on-scroll-up');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      
      if (isVisible && !el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }
}