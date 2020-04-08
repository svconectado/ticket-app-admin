import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: BranchComponent
  }
];

@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class BranchesModule {}
