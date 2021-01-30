import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules: any[] = [MatSnackBarModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
