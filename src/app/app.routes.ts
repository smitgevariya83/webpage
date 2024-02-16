import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostingplansComponent } from './hostingplans/hostingplans.component';
import { WordpresshostingComponent } from './wordpresshosting/wordpresshosting.component';
import { VpsComponent } from './vps/vps.component';
import { DomainComponent } from './domain/domain.component';
import { DadicatedComponent } from './dadicated/dadicated.component';
import { BlogComponent } from './blog/blog.component';
import { SslComponent } from './ssl/ssl.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'hosting',
        component:HostingplansComponent
    },
    {
        path:'wordpress',
        component:WordpresshostingComponent
    },
    {
        path:'domain',
        component:DomainComponent
    },
    {
        path:'vps',
        component:VpsComponent
    },
    {
        path:'dadicated',
        component:DadicatedComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'ssl',
        component:SslComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
