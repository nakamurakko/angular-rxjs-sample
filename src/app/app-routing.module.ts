import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeferAndFromSampleComponent } from './defer-and-from-sample/defer-and-from-sample.component';
import { DistinctSampleComponent } from './distinct-sample/distinct-sample.component';
import { FilterSampleComponent } from './filter-sample/filter-sample.component';
import { IifSampleComponent } from './iif-sample/iif-sample.component';
import { MapSampleComponent } from './map-sample/map-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'defer-and-from-sammple', component: DeferAndFromSampleComponent },
  { path: 'distinct-sample', component: DistinctSampleComponent },
  { path: 'filter-sample', component: FilterSampleComponent },
  { path: 'iif-sample', component: IifSampleComponent },
  { path: 'map-sample', component: MapSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
