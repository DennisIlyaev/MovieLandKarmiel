import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addMovie = false;
  allowedToAdd = true;
  movies = [];
  selectedMovie;
  constructor(public http: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.http.getMovies().subscribe(movies => {
      this.movies = movies;
    },
    err => {
      console.log(err);
    });
  }

  postMovie(movie) {
    this.http.postMovie(movie).subscribe(() => {
      this.addMovie = false;
      this.allowedToAdd = true;
      this.movies.push(movie);
    }, err => {
      console.log(err);
    });
  }

  updateMovie(movie) {
    this.http.updateMovie(movie).subscribe(() => {
      this.selectedMovie = null;
      this.allowedToAdd = true;
    }, err => {
      console.log(err);
    });
  }

  deleteMovie(movie) {
    this.http.deleteMovie(movie).subscribe(deletedMovie => {
      this.selectedMovie = null;
      this.allowedToAdd = true;
      for (let i = 0; i < this.movies.length; i++) {
        // tslint:disable-next-line:no-unused-expression
        this.movies[i]._id === movie._id ? this.movies.splice(i, 1) : null;
      }
    }, err => {
      console.log(err);
    });
  }

  mainMenu() {
    this.router.navigate(['/home']);
  }

}
