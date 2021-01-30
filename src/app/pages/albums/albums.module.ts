import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: AlbumsComponent }];

@NgModule({
  declarations: [AlbumsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AlbumsModule {}
