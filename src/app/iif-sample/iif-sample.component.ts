import { filter, iif, toArray } from 'rxjs';

import { Component } from '@angular/core';

import { SampleService } from '../services/sample.service';

/**
 * iif のサンプルクラス。
 */
@Component({
  selector: 'app-iif-sample',
  templateUrl: './iif-sample.component.html',
  styleUrls: ['./iif-sample.component.css']
})
export class IifSampleComponent {

  public isSelected: boolean = false;
  public responseData: string = '';

  public constructor(private sampleService: SampleService) { }

  /**
   * onClick
   */
  public onClick(): void {
    iif(
      () => this.isSelected,
      this.sampleService.getUsersLikeFrom()
        .pipe(
          filter(x => x.Id % 2 === 0),
          toArray()
        ),
      this.sampleService.getUsers()
    )
      .subscribe(
        value => {
          this.responseData = JSON.stringify(value);
        });
  }

}
