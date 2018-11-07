import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-halltwo',
  templateUrl: './halltwo.component.html',
  styleUrls: ['./halltwo.component.css']
})
export class HalltwoComponent implements OnInit {

  movies;
  constructor(public http: HttpService) { }

  ngOnInit() {
    this.http.getMovies().subscribe(movies => {
      this.movies = movies.filter(x => x.hall >= 4).sort((a, b) => a.starthour > b.starthour);
      this.checkHour();
    }, err => {
      console.log(err);
    });
  }

  checkHour() {
    const currentTime = moment().format('HH:mm');
    this.movies.map(x => currentTime > x.endhour ? this.http.deleteMovie(x).subscribe() : null);
  }

}
