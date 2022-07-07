import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanItemComponent } from './components/loan-item/loan-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoanListComponent,
    LoanItemComponent,
    ModalDialogComponent,

  ],
  // entryComponents: [ModalDialogComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
