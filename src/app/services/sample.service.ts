import { defer, Observable, of, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { User } from '../data-types/user';

/**
 * サンプルサービス。
 */
@Injectable({
  providedIn: 'root',
})
export class SampleService {

  /**
   * ユーザー情報を取得する。
   *
   * @returns ユーザーの配列。
   */
  public getUsers(): Observable<User[]> {
    //#region
    // const result: Subject<User[]> = new Subject<User[]>();

    // setTimeout(() => {
    //   const users: User[] = [
    //     { Id: 1, Name: '太郎' },
    //     { Id: 2, Name: '次郎' },
    //     { Id: 3, Name: '三郎' },
    //     { Id: 4, Name: '四郎' },
    //     { Id: 5, Name: '五郎' },
    //   ];

    //   result.next(users);

    //   result.complete();
    // });

    // return result;
    //#endregion

    return defer<Observable<User[]>>(() => {
      const users: User[] = [
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      ];

      return of(users);
    });

  }

  /**
   * ユーザー情報を取得する。
   *
   * @returns Observable<User>を複数返す。
   */
  public getUsersLikeFrom(): Observable<User> {
    const result: Subject<User> = new Subject<User>();

    setTimeout(() => {
      const users: User[] = [
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      ];

      users.forEach(user => {
        result.next(user);
      });

      result.complete();
    });

    return result;
  }

  /**
   * 重複したユーザーデータを取得する。
   *
   * @returns ユーザーの配列。
   */
  public getDuplicateUsers(): Observable<User[]> {
    return defer(() => {
      const users: User[] = [
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 1, Name: '太郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      ];

      return of(users);
    });
  }

}
