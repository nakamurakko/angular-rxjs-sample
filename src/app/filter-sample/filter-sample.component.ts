import { filter, from, mergeMap, pipe, toArray } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { User } from '../data-types/user';
import { SampleService } from '../services/sample.service';

/**
 * filter のサンプルクラス。
 */
@Component({
  selector: 'app-filter-sample',
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './filter-sample.component.html',
  styleUrl: './filter-sample.component.css',
})
export class FilterSampleComponent {

  private sampleService = inject(SampleService);

  protected readonly displayColumns: string[] = ['id', 'name'];

  protected readonly sampleUsers: User[] = [
    { Id: 1, Name: '太郎' },
    { Id: 2, Name: '次郎' },
    { Id: 3, Name: '三郎' },
    { Id: 4, Name: '四郎' },
    { Id: 5, Name: '五郎' },
  ];

  public users = signal<User[]>([]);

  /**
   * sample1
   * Observable.pipeにfilterを定義する。
   */
  public sample1(): void {
    this.users.set([]);

    from(this.sampleUsers)
      .pipe(
        filter(x => x.Id % 2 === 0)
      )
      .subscribe(value => {
        this.users.update(x => [...x, value])
      });
  }

  /**
   * sample2
   * rxjs.pipeをインポートすれば、pipeの定義を先に出来る。
   */
  public sample2(): void {
    this.users.set([]);

    const operator = pipe(
      filter((x: User) => x.Id % 2 === 0)
    );

    operator(from(this.sampleUsers))
      .subscribe(value => {
        this.users.update(x => [...x, value]);
      });

    // 上の記述を定義無しで1まとめにした場合。
    pipe(
      filter((x: User) => x.Id % 2 === 0)
    )(from(this.sampleUsers))
      .subscribe(value => {
        this.users.update(x => [...x, value]);
      });
  }

  /**
   * sample3
   */
  public sample3(): void {
    from(this.sampleUsers)
      .pipe(
        filter(x => x.Id % 2 === 0),
        toArray()
      )
      .subscribe(value => {
        this.users.set([...value]);
      });
  }

  /**
   * sample4
   * mergeMap → filter → toArray で再度配列化
   */
  public sample4(): void {
    this.sampleService.getUsers()
      .pipe(
        mergeMap(x => x),
        filter(x => x.Id % 2 === 0),
        toArray()
      )
      .subscribe(value => {
        this.users.set([...value]);
      });
  }

}
