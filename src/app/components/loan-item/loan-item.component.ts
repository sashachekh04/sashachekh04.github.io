import { Component, OnInit } from '@angular/core';
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss']
})
export class LoanItemComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  public openModal(): void {
    this.dialog.open(ModalDialogComponent)
  }
  ngOnInit(): void {
  }

}
