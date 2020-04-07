import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {UiModule} from '../ui/ui.module';

const Routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];


@NgModule({
  declarations: [WelcomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(Routes),
        UiModule
    ]
})
export class DashboardModule {
}
