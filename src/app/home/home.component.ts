import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { HostingComponent } from '../hosting/hosting.component';
import { WwgComponent } from '../wwg/wwg.component';
import { PRICINGComponent } from '../pricing/pricing.component';
import { HelpandteamComponent } from '../helpandteam/helpandteam.component';
import { EmploysComponent } from '../employs/employs.component';
import { CompanyComponent } from '../company/company.component';
import { OurblogComponent } from '../ourblog/ourblog.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,HostingComponent,WwgComponent,PRICINGComponent,HelpandteamComponent,EmploysComponent,CompanyComponent,OurblogComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
