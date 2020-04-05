import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent, SimpleLayoutComponent} from './containers';


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
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'company',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'maintenance',
    component: MainLayoutComponent,
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
