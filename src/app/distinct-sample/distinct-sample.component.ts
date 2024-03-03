import { distinct, mergeMap, toArray } from 'rxjs';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { User } from '../data-types/user';
import { SampleService } from '../services/sample.service';

/**
 * distinct のサンプルクラス。
 */
@Component({
  selector: 'app-distinct-sample',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './distinct-sample.component.html',
  styleUrl: './distinct-sample.component.css'
})
export class DistinctSampleComponent {

  public readonly displayColumns: Array<string> = ['id', 'name'];

  public users: Array<User> = new Array<User>();

  public constructor(private sampleService: SampleService) { }

  /**
   * onClick
   */
  public onClick(): void {
    this.sampleService.getDuplicateUsers()
      .pipe(
        mergeMap(x => x),
        distinct(x => x.Id),
        toArray()
      )
      .subscribe(value => {
        this.users = value;
      });
  }

}
