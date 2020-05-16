import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordComponent} from './components/forget/forget-password.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutComponent} from './template/auth-layout/auth-layout.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';


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
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule {
}
