import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay:true,
    responsive:{
      0:{
    items: 1,

      }
    }
  }
}
