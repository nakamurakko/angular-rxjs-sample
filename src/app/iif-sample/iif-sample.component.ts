import { filter, iif, toArray } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { SampleService } from '../services/sample.service';

/**
 * iif のサンプルクラス。
 */
@Component({
  selector: 'app-iif-sample',
  templateUrl: './iif-sample.component.html',
  styleUrls: ['./iif-sample.component.css']
})
export class IifSampleComponent implements OnInit {

  public isSelected: boolean = false;
  public responseData: string = '';

  public constructor(private sampleService: SampleService) { }

  public ngOnInit(): void {
  }

  /**
   * onClick
   */
  public onClick(): void {
    // forkJoin(
    //   iif(() => this.isSelected, of([]), of([]))
    // ).subscribe();

    iif(
      () => this.isSelected,
      this.sampleService.getUsersLikeFrom()
        .pipe(
          filter(value => value.Id % 2 === 0),
          toArray()
        ),
      this.sampleService.getUsers()
    )
      .subscribe(response => {
        this.responseData = JSON.stringify(response);
      });
  }

}
