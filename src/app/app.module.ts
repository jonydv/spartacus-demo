import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsComponentsModule } from './cms-components/cms-components.module';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CmsComponentsModule,
    BrowserTransferStateModule,
    ConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
