import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public albumsS: AlbumsService) {}

  ngOnInit(): void {}

  resetInput() {
    this.albumsS.setSearch('');
  }
}
