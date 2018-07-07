import { NgModule } from '@angular/core';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    exports: [ MatButtonModule, MatInputModule, MatFormFieldModule]
})
export class MatModule { }
