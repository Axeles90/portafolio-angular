import { NgModule, Component } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { Portafolio } from './pages/portafolio/portafolio'; 
import { About } from './pages/about/about';
import { Item } from './pages/item/item';

const routes: Routes = [
  { path: 'home', component: Portafolio },
  {path: 'about', component: About},
  {path: 'item' , component: Item},
  {path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirect to home for any unknown paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
