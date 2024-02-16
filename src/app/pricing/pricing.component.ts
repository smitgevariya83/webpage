import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PRICINGComponent {
  faCheck = faCheck;
  faXmark = faXmark;
}
