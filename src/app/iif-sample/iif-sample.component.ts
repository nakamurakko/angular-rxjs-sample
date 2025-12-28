import { filter, iif, toArray } from 'rxjs';

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

import { SampleService } from '../services/sample.service';

/**
 * iif のサンプルクラス。
 */
@Component({
  selector: 'app-iif-sample',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './iif-sample.component.html',
  styleUrl: './iif-sample.component.css',
})
export class IifSampleComponent {

  private sampleService = inject(SampleService);

  public isSelected = signal<boolean>(false);
  public responseData = signal<string>('');

  /**
   * onRadioChange
   */
  public onRadioChange(event: MatRadioChange): void {
    this.isSelected.set(event.value);
  }

  /**
   * onClick
   */
  public onClick(): void {
    iif(
      () => this.isSelected(),
      this.sampleService.getUsersLikeFrom()
        .pipe(
          filter(x => x.Id % 2 === 0),
          toArray()
        ),
      this.sampleService.getUsers()
    )
      .subscribe(value => {
        this.responseData.set(JSON.stringify(value));
      });
  }

}
