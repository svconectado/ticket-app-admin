import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonLayoutComponent, SimpleLayoutComponent} from './containers';


const routes: Routes = [
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'register',
    component: SimpleLayoutComponent,
    loadChildren: () => import('./modules/register-company/register-company.module').then(m => m.RegisterCompanyModule)
  },
  {
    path: 'category',
    component: CommonLayoutComponent,
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'company',
    component: CommonLayoutComponent,
    loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'dashboard',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'maintenance',
    component: CommonLayoutComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
