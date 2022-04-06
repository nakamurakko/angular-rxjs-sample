import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistinctSampleComponent } from './distinct-sample/distinct-sample.component';
import { FilterSampleComponent } from './filter-sample/filter-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'distinct-sample', component: DistinctSampleComponent },
  { path: 'filter-sample', component: FilterSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
