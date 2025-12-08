import { Component, Inject, PLATFORM_ID, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageNotFound implements OnInit {
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      import('@lottiefiles/dotlottie-wc').then(() => {
        console.log('Lottie player loaded');
      }).catch(err => {
        console.error('Failed to load Lottie player', err);
      });
    }
  }
}
