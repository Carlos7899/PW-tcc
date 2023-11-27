import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/Empresa/sobre-nos/sobre-nos.component';
import { ValoresComponent } from './components/Empresa/valores/valores.component';

const routes: Routes = [
     {path:'', component:HomeComponent},
     {path:'Empresa', component:SobreNosComponent},
     {path:'Empresa/valores', component:ValoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
