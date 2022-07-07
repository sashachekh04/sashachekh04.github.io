export interface Loan {
  id: string | number,
  title: string,
  tranche: string,
  available: number,
  annualised_return: string,
  term_remaining: string,
  ltv: string,
  amount: string
}
