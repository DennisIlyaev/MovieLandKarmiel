import { Component, OnInit, Testability } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-hallone',
  templateUrl: './hallone.component.html',
  styleUrls: ['./hallone.component.css']
})
export class HalloneComponent implements OnInit {

  movies;

  constructor(public http: HttpService) {
   }

    ngOnInit() {
          this.http.getMovies().subscribe(movies => {
            this.movies = movies.filter(x => x.hall <= 3).sort((a, b) => a.starthour > b.starthour);
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
