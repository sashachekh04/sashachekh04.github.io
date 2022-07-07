import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Loan } from "../model/loan";
import { data } from "../loan-data/data";

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loans$!: BehaviorSubject<Loan[]>;
  private availableAmount!: number;

  constructor() {
    this.loans$ = new BehaviorSubject<Loan[]>(data)
  }
  public get data(): Observable<Loan[]> {
    return this.loans$.asObservable()
  }
  public get availableForInvesting(): number {
    return this.loans$.value.reduce((acum, current) => acum + current.available, 0)
  }
  public changeLoanAvialabel(loan: Loan, currentValue: string, prevValue: number): void {
    const changedLoan = loan;
    changedLoan.available = prevValue - (+currentValue)
    const changedLoanIndex = this.loans$.value.indexOf(loan)
    this.loans$.value.splice(changedLoanIndex, 1, changedLoan)
    this.loans$.next([...this.loans$.value])
  }
}
