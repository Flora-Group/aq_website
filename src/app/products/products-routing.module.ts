import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'men'
},
{
  path: 'men',
  component: MenComponent
},
{
  path: 'women',
  component: WomenComponent
},
{
  path: 'accessories',
  component: AccessoriesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
