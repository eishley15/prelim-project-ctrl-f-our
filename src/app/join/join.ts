import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-join',
  imports: [Footer],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        document.querySelectorAll('.animate-on-load, .animate-on-scroll').forEach((el) => {
          el.classList.add('animate-in');
        });
      }, 100);
    }
  }
}
