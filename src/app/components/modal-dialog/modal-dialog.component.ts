import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Loan } from "../../core/model/loan";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidatePhone } from "../../core/validators/only-numbers";
import { LoanService } from "../../core/services/loan.service";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  public timeToEnd!: any;

  public investForm: FormGroup = this.fb.group({
    amount: ['', [Validators.required, ValidatePhone]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: Loan,
              private fb: FormBuilder,
              private loanService: LoanService) {
    this.timeToEnd = this.endtime
  }

  ngOnInit(): void {
  }
  public get endtime(): Object {
    const day = Math.floor(+this.data.term_remaining / (100*60*60*24)),
          hours = Math.floor(+this.data.term_remaining / (100*60*60) % 24),
          minutes = Math.floor((+this.data.term_remaining/1000/60) % 60)
    return {
      'day': day,
      'hours': hours,
      'minutes': minutes
    }
  }
  public onSubmitForm(): void {
    if(this.investForm.invalid) {
      return;
    }

    this.loanService.changeLoanAvialabel(this.data, this.investForm.get('amount')?.value, this.data.available)
  }
}
