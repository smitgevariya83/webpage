import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vps',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vps.component.html',
  styleUrl: './vps.component.css'
})
export class VpsComponent {
  faCheck = faCheck;
  faXmark = faXmark;
}
