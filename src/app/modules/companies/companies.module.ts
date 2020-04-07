import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyComponent} from './company/company.component';
import {UiModule} from '../ui/ui.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


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
        ReactiveFormsModule,
        DataTablesModule
    ]
})
export class CompaniesModule {
}
