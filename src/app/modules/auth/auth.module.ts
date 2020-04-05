import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordComponent} from './forget/forget-password.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';


const Router: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forget',
        component: ForgetPasswordComponent
      }
    ]
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(Router),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    ForgetPasswordComponent
  ]
})
export class AuthModule {
}
