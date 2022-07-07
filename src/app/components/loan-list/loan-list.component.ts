import { Component, OnInit } from '@angular/core';
import { LoanService } from "../../core/services/loan.service";
import { Observable } from "rxjs";
import { Loan } from "../../core/model/loan";

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  public loanList$: Observable<Loan[]>;
  public availabel!: number;

  constructor(private loanService: LoanService) {
    this.loanList$ = this.loanService.data
    this.availabel = this.loanService.availableForInvesting
  }

  ngOnInit(): void {
    this.loanList.subscribe(el => console.log(el))
  }

}
