import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './page/domain/domain.component';

const routes: Routes = [
  { path: '', component: DomainComponent },
  {
    path: 'tarhely',
    component: DomainComponent,
  },
  {
    path: 'vps',
    component: DomainComponent,
  },
  {
    path: 'tudasbazis',
    component: DomainComponent,
  },
  {
    path: 'contact',
    component: DomainComponent,
  },
  {
    path: 'steps1',
    component: DomainComponent,
  },
  {
    path: 'steps2',
    component: DomainComponent,
  },
  {
    path: 'steps3',
    component: DomainComponent,
  },
  {
    path: 'steps4',
    component: DomainComponent,
  },
  { path: '**', component: DomainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
