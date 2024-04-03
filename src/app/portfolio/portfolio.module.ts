import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [],
  imports: [CommonModule, PortfolioRoutingModule, ButtonsModule],
})
export class PortfolioModule {}
