import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from './title/title.component';
import { ModalComponent } from './modal/modal.component';

const COMPONENTS = [
  TitleComponent,
  ModalComponent
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
