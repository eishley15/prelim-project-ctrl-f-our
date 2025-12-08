import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
