import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'products',
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
{
  path: 'under-construction',
  component: UnderConstructionComponent
},
{
  path: 'maintanance',
  component: MaintananceComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
