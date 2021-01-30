import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [];

@NgModule({
  declarations: [GenreCardComponent, AlbumCardComponent, HeaderComponent],
  exports: [
    GenreCardComponent,
    AlbumCardComponent,
    MaterialModule,
    HeaderComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routs)],
})
export class SharedModule {}
