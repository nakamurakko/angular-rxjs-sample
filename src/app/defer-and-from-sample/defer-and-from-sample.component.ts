import { defer, delay, from, mergeMap, Observable, of } from 'rxjs';

import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * defer from を確認するサンプルコンポーネント。
 */
@Component({
  selector: 'app-defer-and-from-sample',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './defer-and-from-sample.component.html',
  styleUrl: './defer-and-from-sample.component.css',
})
export class DeferAndFromSampleComponent {

  public deferStartTime = signal<string>('');
  public deferEndTime = signal<string>('');
  public deferEndTimeWithConst = signal<string>('');

  public fromStartTime = signal<string>('');
  public fromEndTime = signal<string>('');
  public fromEndTimeWithConst = signal<string>('');

  /**
   * defer の確認。
   */
  public onDeferClick(): void {
    this.deferStartTime.set(new Date().toLocaleString());
    this.deferEndTime.set('');
    this.deferEndTimeWithConst.set('');

    // defer を使用して pipe 内で Promise を呼び出す。
    of('')
      .pipe(
        delay(3000),
        mergeMap(() => defer(() => this.getDateByPromise()))
      )
      .subscribe(value => {
        this.deferEndTime.set(value.toLocaleString());
      });

    // defer を使用して外部定義した Promise を呼び出す。
    const process: Observable<Date> = defer(() => this.getDateByPromise());
    of('')
      .pipe(
        delay(3000),
        mergeMap(() => process)
      )
      .subscribe(value => {
        this.deferEndTimeWithConst.set(value.toLocaleString());
      });
  }

  /**
   * from の確認。
   */
  public onFromClick(): void {
    this.fromStartTime.set(new Date().toLocaleString());
    this.fromEndTime.set('');
    this.fromEndTimeWithConst.set('');

    // from を使用して pipe 内で Promise を呼び出す。
    of('')
      .pipe(
        delay(3000),
        mergeMap(() => from(this.getDateByPromise()))
      )
      .subscribe(value => {
        this.fromEndTime.set(value.toLocaleString());
      });

    // from を使用して外部定義した Promise を呼び出す。
    // subscribe は delay で指定したタイミングだが、表示される終了日時が from が定義された日時になっている。
    const process: Observable<Date> = from(this.getDateByPromise());
    of('')
      .pipe(
        delay(3000),
        mergeMap(() => process)
      )
      .subscribe(value => {
        this.fromEndTimeWithConst.set(value.toLocaleString());
      });
  }

  /**
   * 日付を Promise で取得する。
   *
   * @returns 日付。
   */
  private getDateByPromise(): Promise<Date> {
    return new Promise(
      resolve => {
        resolve(new Date());
      }
    );
  }

}
