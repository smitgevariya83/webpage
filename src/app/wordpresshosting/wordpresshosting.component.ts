import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wordpresshosting',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './wordpresshosting.component.html',
  styleUrl: './wordpresshosting.component.css'
})
export class WordpresshostingComponent {
  faCheck = faCheck;
  faXmark = faXmark;
}
