import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
},
{
  path: 'dashboard',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'about-us',
  component: AboutComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
