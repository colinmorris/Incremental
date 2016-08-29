import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './shared/app.component';
import { routing } from './shared/app.routes';

import { SpellsComponent } from './perks/spells.component';

@NgModule({
    imports: [BrowserModule, SimpleNotificationsModule,
        routing
    ],
    declarations: [AppComponent,
        SpellsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}