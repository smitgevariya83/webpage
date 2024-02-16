import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-employs',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './employs.component.html',
  styleUrl: './employs.component.css'
})
export class EmploysComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 1,
    nav: true
  }
}
