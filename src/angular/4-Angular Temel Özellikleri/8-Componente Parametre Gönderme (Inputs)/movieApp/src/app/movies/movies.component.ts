import { Component } from '@angular/core';
import {Movies} from '../movie.datasource';
import { Movie } from '../movie';

@Component({
    selector: 'movies'  ,
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    title = 'Movie List';
    movies= Movies;
    selectedMovie: Movie;

    onSelect(movie:Movie): void {
        this.selectedMovie = movie;
    }

}