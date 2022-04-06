import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistinctSampleComponent } from './distinct-sample/distinct-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'distinct-sample', component: DistinctSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
