import { map, mergeMap, toArray } from 'rxjs';

import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { User } from '../data-types/user';
import { SampleService } from '../services/sample.service';

/**
 * map のサンプルクラス。
 */
@Component({
  selector: 'app-map-sample',
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './map-sample.component.html',
  styleUrl: './map-sample.component.css',
})
export class MapSampleComponent {

  private sampleService = inject(SampleService);

  protected readonly displayColumns: string[] = ['id', 'name'];

  public users = signal<User[]>([]);

  /**
   * onClick
   */
  public onClick(): void {
    this.sampleService.getUsers()
      .pipe(
        mergeMap(x => x),
        map(x => {
          x.Name = '田中' + x.Name;
          return x;
        }),
        toArray()
      )
      .subscribe(value => {
        this.users.set([...value]);
      });
  }

}
