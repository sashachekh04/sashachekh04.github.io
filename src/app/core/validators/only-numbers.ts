import { AbstractControl } from "@angular/forms";

export function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  return (/^[0-9.]*$/g.test(control.value)) ?  null : { 'phoneNumberInvalid': true }
}
