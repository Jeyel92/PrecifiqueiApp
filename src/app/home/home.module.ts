import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaqueComponent } from './destaque/destaque.component';
import { PageComponent } from './page/page.component';
import { OqueComponent } from './oque/oque.component';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DestaqueComponent, PageComponent, OqueComponent, ComofuncionaComponent, BeneficiosComponent, BottomComponent],
  exports: [PageComponent]
})
export class HomeModule { }
