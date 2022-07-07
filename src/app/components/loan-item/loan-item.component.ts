import { Component, Input, OnInit } from '@angular/core';
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";
import {MatDialog} from '@angular/material/dialog';
import { Loan } from "../../core/model/loan";
import { LoanService } from "../../core/services/loan.service";

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss']
})
export class LoanItemComponent implements OnInit {
  @Input() loanItem!: Loan;

  constructor(public dialog: MatDialog) {
  }

  public openModal(loan: Loan): void {
    this.dialog.open(ModalDialogComponent, {data: loan})
  }
  ngOnInit(): void {
  }

  public get title(): string {
    return this.loanItem.title
  }
  public get tranche(): string {
    return this.loanItem.tranche
  }
}
