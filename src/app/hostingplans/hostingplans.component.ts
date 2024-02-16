import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PRICINGComponent } from '../pricing/pricing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hostingplans',
  standalone: true,
  imports: [FooterComponent,PRICINGComponent,FontAwesomeModule],
  templateUrl: './hostingplans.component.html',
  styleUrl: './hostingplans.component.css'
})
export class HostingplansComponent {
  faCheck = faCheck;
  faXmark = faXmark;
}
