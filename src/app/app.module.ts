import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './common/cart/cart.component';
import { HeaderComponent } from './common/header/header.component';
import { LoadingCardComponent } from './common/loading-card/loading-card.component';
import { StepsComponent } from './common/steps/steps.component';
import { DomainComponent } from './page/domain/domain.component';
import { SliceDomainPipe } from './pipe/slice-domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    LoadingCardComponent,
    StepsComponent,
    DomainComponent,
    SliceDomainPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
