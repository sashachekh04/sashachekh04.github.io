import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Loan } from "../model/loan";
import { data } from "../loan-data/data";

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private dataSourse$!: BehaviorSubject<Loan[]>;

  constructor() {
    this.dataSourse$ = new BehaviorSubject<Loan[]>(data)
  }
  public get data(): Observable<Loan[]> {
    return this.dataSourse$.asObservable()
  }
}
