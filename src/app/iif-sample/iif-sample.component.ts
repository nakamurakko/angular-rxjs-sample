import { filter, iif, toArray } from 'rxjs';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { SampleService } from '../services/sample.service';

/**
 * iif のサンプルクラス。
 */
@Component({
  selector: 'app-iif-sample',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './iif-sample.component.html',
  styleUrl: './iif-sample.component.css'
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
      .subscribe(value => {
        this.responseData = JSON.stringify(value);
      });
  }

}
