import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatModule } from './mat.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule, MatModule],
  declarations: []
})
export class SharedModule { }
