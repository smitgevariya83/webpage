import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dadicated',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './dadicated.component.html',
  styleUrl: './dadicated.component.css'
})
export class DadicatedComponent {
  faXmark = faXmark;
  faCheck =faCheck;
}
