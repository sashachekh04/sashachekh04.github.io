import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanItemComponent } from './components/loan-item/loan-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoanListComponent,
    LoanItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
