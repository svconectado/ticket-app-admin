import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from './title/title.component';

const COMPONENTS = [
  TitleComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class UiModule {
}
