import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { StripepaymentComponent } from './stripepayment/stripepayment.component';
const routes: Routes = [
  { path: 'deals', component: MainpageComponent },
  { path: 'payment', component: StripepaymentComponent},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
