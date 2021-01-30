import { Component, Input, OnInit } from '@angular/core';
import { IGenreCard } from '../interface/genre-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss'],
})
export class GenreCardComponent implements OnInit {
  @Input()
  public genreData: IGenreCard | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  genreLink(title: string | undefined): void {
    this.router.navigate([title, 'albums']);
  }
}
