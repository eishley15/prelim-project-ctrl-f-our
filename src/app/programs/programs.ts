import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from '../header/header';

@Component({
  selector: 'app-programs',
  imports: [Footer, Header],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs {

}