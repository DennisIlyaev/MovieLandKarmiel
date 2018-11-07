import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(public http: HttpClient) { }

  getMovies() {
    return this.http.get<any>('/api/movies');
  }

  getDescription() {
    return this.http.get<any>('/api/description');
  }

  postMovie(movie) {
    return this.http.post('/api/postmovie', movie);
  }

  updateMovie(movie) {
    return this.http.put('/api/updatemovie/' + movie._id, movie);
  }

  deleteMovie(movie) {
    return this.http.delete('/api/deletemovie/' + movie._id, movie);
  }

}
