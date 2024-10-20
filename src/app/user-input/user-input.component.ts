import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../interface/investment.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() investment = new EventEmitter<Investment>();
  enteredInitialInvestment:number = 0;
  enteredAnnualInvestment:number = 0;
  enteredExpectedReturn:number = 5;
  enteredDuration:number = 10;
  onSubmit() {
    const data = {
      initialInvestment: this.enteredInitialInvestment,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnnualInvestment,
    };
    this.investment.emit(data); 
  }

}
