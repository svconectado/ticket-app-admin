import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TemplateService} from './services/template.service';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PerfectScrollbarModule,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        PerfectScrollbarModule,
        NgbModule
    ],
    declarations: [],
    providers: [
        TemplateService
    ]
})

export class SharedModule {
}
