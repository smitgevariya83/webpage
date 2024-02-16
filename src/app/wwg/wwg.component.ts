import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEarth,faLifeRing,faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wwg',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './wwg.component.html',
  styleUrl: './wwg.component.css'
})
export class WwgComponent {
  faEarth = faEarth;
  faLifeRing = faLifeRing;
  faCheck = faCheck;
}
