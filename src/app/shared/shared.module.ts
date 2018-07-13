import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatModule } from './mat.module';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [RouterModule, MatModule, FlexModule],
  declarations: []
})
export class SharedModule { }
