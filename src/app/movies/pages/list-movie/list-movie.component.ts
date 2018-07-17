import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  data: Movie[] = [];

  constructor(private service: MovieService) {

    service.getPopular()
      .subscribe(x => this.data = x, err => console.log(err));

  }

  ngOnInit() {
  }

}
