import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonLayoutComponent, MainLayoutComponent, SimpleLayoutComponent} from './containers';

import {ToastrModule} from 'ngx-toastr';
import {SharedModule} from './modules/shared/shared.module';
import {TemplateModule} from './modules/template/template.module';


const LAYOUTS = [
    SimpleLayoutComponent,
    MainLayoutComponent,
    CommonLayoutComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...LAYOUTS,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        TemplateModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-top-center',
            preventDuplicates: true,
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
