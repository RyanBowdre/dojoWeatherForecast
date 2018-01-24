import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';



const routes: Routes = [
  {
    path: 'burbank',
    component: BurbankComponent,
    children: []
  },
  {
    path: 'seattle',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'washington',
    component: WashingtonComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
