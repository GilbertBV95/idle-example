import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgIdleKeepaliveModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
