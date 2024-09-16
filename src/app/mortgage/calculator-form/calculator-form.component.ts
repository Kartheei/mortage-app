import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveMonthlyPayment } from '../../store/mortgage.actions';
import { MortgageState } from '../../store/mortgage.state';



@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  mortgageForm!: FormGroup;
  monthlyPayment: number | null = null;

  constructor(private fb: FormBuilder, private store: Store<MortgageState>) { }

  ngOnInit(): void {
    this.mortgageForm = this.fb.group({
      loanAmount: ['', [Validators.required, Validators.min(1)]],
      interestRate: ['', [Validators.required, Validators.min(1)]],
      loanTerm: ['', [Validators.required, Validators.min(1)]]
    })
  }

  onSubmit(): void {
    debugger
    if (this.mortgageForm.valid) {
      const loanAmount = this.mortgageForm.value.loanAmount;
      const interestRate = this.mortgageForm.value.interestRate;
      const loanTerm = this.mortgageForm.value.loanTerm;

      if (interestRate > 0) {
        this.monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
          (Math.pow(1 + interestRate, loanTerm) - 1);
      } else {
        this.monthlyPayment = loanAmount / loanTerm;
      }

      console.log("loanAmount", loanAmount)
      this.store.dispatch(saveMonthlyPayment({ monthlyPayment: this.monthlyPayment }));

    }
  }

}
