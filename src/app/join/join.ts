import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-join',
  imports: [Footer],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      document.querySelectorAll('.animate-on-load, .animate-on-scroll').forEach((el) => {
        el.classList.add('animate-in');
      });
    }, 100);
  }
}
