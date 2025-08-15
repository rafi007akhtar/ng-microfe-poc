import { Component } from '@angular/core';

type Movie = {
  id: number;
  title: string;
  poster?: string;
};
type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public movies: Movies = [
    {
      id: 1,
      title: 'Inception',
      poster: '',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: '',
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: '',
    },
    {
      id: 4,
      title: 'The Matrix',
      poster: '',
    },
    {
      id: 5,
      title: 'The Avengers',
      poster: '',
    },
  ];

  checkAvailability(id: number) {
    // TODO: fill this later to communicate with the other MFs
  }
}
