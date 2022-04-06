import { map, mergeMap, toArray } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { User } from '../data-types/user';
import { SampleService } from '../services/sample.service';

/**
 * map のサンプルクラス。
 */
@Component({
  selector: 'app-map-sample',
  templateUrl: './map-sample.component.html',
  styleUrls: ['./map-sample.component.css']
})
export class MapSampleComponent implements OnInit {

  public readonly displayColumns: Array<string> = ['id', 'name'];

  public users: Array<User> = new Array<User>();

  public constructor(private sampleService: SampleService) { }

  public ngOnInit(): void {
  }

  /**
   * onClick
   */
  public onClick(): void {
    this.sampleService.getUsers()
      .pipe(
        mergeMap(value => value),
        map<User, User>(value => {
          value.Name = '田中' + value.Name;
          return value;
        }),
        toArray()
      )
      .subscribe(value => {
        this.users = value;
      });
  }

}
