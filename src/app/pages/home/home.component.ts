import { Component, OnInit } from '@angular/core';
import { IGenreCard } from '../../shared/components/interface/genre-card.interface';
import { genreDate } from './genre-card-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  genreData: Array<IGenreCard> = [];
  constructor() {}

  ngOnInit(): void {
    this.genreData = genreDate;
  }
}
