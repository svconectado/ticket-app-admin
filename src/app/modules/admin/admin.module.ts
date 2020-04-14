import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';

const ROUTES: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    UiModule,
    DataTablesModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AdminModule {}
