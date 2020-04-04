import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyComponent} from './company/company.component';
import {UiModule} from '../shared/ui/ui.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const ROUTES: Routes = [
  {
    path: '',
    component: CompanyComponent
  }
];

@NgModule({
  declarations: [CompanyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        UiModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CompaniesModule {
}
