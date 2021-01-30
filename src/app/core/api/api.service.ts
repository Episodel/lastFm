import { Injectable } from '@angular/core';
import { AlbumsApiService } from './routes/albums-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public topic: AlbumsApiService) {}
}
