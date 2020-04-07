import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category/category.component';
import {RouterModule, Routes} from '@angular/router';
import {UiModule} from '../ui/ui.module';

const ROUTES: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
];


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    UiModule
  ]
})
export class CategoriesModule {
}
