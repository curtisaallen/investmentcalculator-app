import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { Investment } from './interface/investment.model';
import { InvestmentService } from './service/investment.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  InvestmentResults:any[] = [];

  constructor(private investmentService:  InvestmentService) {}
  
  handleInvestment(investmentData: Investment) {
    this.InvestmentResults = this.investmentService.calculateInvestmentResults(investmentData)
  }
}
