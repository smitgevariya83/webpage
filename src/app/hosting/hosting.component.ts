import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEarth,faServer,faHourglassStart,faExchange } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.css'
})
export class HostingComponent {
  faEarth = faEarth;
  faServer = faServer;
  faHourglassStart = faHourglassStart;
  faExchange = faExchange;
}
