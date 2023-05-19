import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, retry, tap } from 'rxjs';
import { IFeed } from '../models/feed';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private http: HttpClient) {}

  feeds: IFeed[] = [];

  getAll(): Observable<IFeed[]> {
    return this.http.get<IFeed[]>('http://localhost:8000/list').pipe(
      delay(200),
      retry(2),
      tap((feeds) => (this.feeds = feeds))
    );
  }
}
