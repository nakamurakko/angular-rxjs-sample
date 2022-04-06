import { User } from './../data-types/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, Observable, of, Subject } from 'rxjs';

/**
 * サンプルサービス。
 */
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  public constructor(private http: HttpClient) { }

  /**
   * ユーザー情報を取得する。
   *
   * @returns ユーザーの配列。
   */
   public getUsers(): Observable<Array<User>> {
    //#region
    // let result: Subject<Array<User>> = new Subject<Array<User>>();

    // setTimeout(() => {
    //   let users: Array<User> = new Array<User>(
    //     { Id: 1, Name: '太郎' },
    //     { Id: 2, Name: '次郎' },
    //     { Id: 3, Name: '三郎' },
    //     { Id: 4, Name: '四郎' },
    //     { Id: 5, Name: '五郎' },
    //   );

    //   result.next(users);

    //   result.complete();
    // });

    // return result;
    //#endregion

    return defer<Observable<Array<User>>>(() => {
      const users: Array<User> = new Array<User>(
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      );

      return of(users);
    });

  }

  //#region getUsers(AspNetCoreSampleから取得する場合)
  // /**
  //  * getUsers(AspNetCoreSampleから取得する場合)
  //  */
  // public getUsers(): Observable<Array<User>> {
  //   let result: Subject<Array<User>> = new Subject<Array<User>>();

  //   this.http.get('http://localhost:63093/api/user')
  //     .subscribe(response => {
  //       result.next(response as Array<User>);
  //       result.complete();
  //     });

  //   return result;
  // }
  //#endregion

  /**
   * ユーザー情報を取得する。
   *
   * @returns Observable<User>を複数返す。
   */
  public getUsersLikeFrom(): Observable<User> {
    const result: Subject<User> = new Subject<User>();

    setTimeout(() => {
      const users: Array<User> = new Array<User>(
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      );

      users.forEach(user => {
        result.next(user);
      });

      result.complete();
    });

    return result;
  }

  /**
   * 重複したユーザーデータを取得する。
   * @returns ユーザーの配列。
   */
  public getDuplicateUsers(): Observable<Array<User>> {
    return defer<Observable<Array<User>>>(() => {
      const users: Array<User> = new Array<User>(
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 1, Name: '太郎' },
        { Id: 2, Name: '次郎' },
        { Id: 3, Name: '三郎' },
        { Id: 1, Name: '太郎' },
        { Id: 4, Name: '四郎' },
        { Id: 5, Name: '五郎' },
      );

      return of(users);
    });
  }

}
