import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private lastScrollTop = 0;
  private scrollTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Add animation class on initial load
      setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          el.classList.add('animate-in');
        });
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

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
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

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
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = document.querySelectorAll('.animate-on-scroll-up');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (isVisible && !el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }

  scrollToTop() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
