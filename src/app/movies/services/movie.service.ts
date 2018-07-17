import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    const apiKey = environment.apiKey;
    const url = environment.urlBase + '/movie/popular?api_key=' + apiKey + '&page=1&language=es';
    return this.http.get<Results<Movie>>(url)
      .pipe(
        map(x => x.results)
      );
  }

}

export class Results<T> {
  results: T[];
}

export class Movie {
  poster_path: string;
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
}
