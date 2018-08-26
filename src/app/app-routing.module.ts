import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './produtos/cadastro-produto/cadastro-produto.component';
import { PageComponent } from './home/page/page.component';

const routes: Routes = [
  { path: 'cadastro-produtos', component: CadastroProdutoComponent },
  { path: 'home', component: PageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }


