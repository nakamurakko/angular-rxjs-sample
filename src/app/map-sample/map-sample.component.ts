import { map, mergeMap, toArray } from 'rxjs';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { User } from '../data-types/user';
import { SampleService } from '../services/sample.service';

/**
 * map のサンプルクラス。
 */
@Component({
  selector: 'app-map-sample',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './map-sample.component.html',
  styleUrl: './map-sample.component.css'
})
export class MapSampleComponent {

  public readonly displayColumns: Array<string> = ['id', 'name'];

  public users: Array<User> = new Array<User>();

  public constructor(private sampleService: SampleService) { }

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
        this.users = value;
      });
  }

}
