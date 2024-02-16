import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ssl',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './ssl.component.html',
  styleUrl: './ssl.component.css'
})
export class SslComponent {
  faCheck = faCheck;
  faXmark = faXmark;
}
