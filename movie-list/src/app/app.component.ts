import { Component } from '@angular/core';

type Movie = {
  id: number;
  title: string;
  poster?: string;
};
type Movies = Array<Movie>;

const PORT = 4201;
const pathToAssets = `http://localhost:${PORT}/assets`;

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
      poster: `${pathToAssets}/inception.jpg`,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: `${pathToAssets}/tdk.jpg`,
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: `${pathToAssets}/inters.jpg`,
    },
    {
      id: 4,
      title: 'The Matrix',
      poster: `${pathToAssets}/matrix.jpg`,
    },
    {
      id: 5,
      title: 'The Avengers',
      poster: `${pathToAssets}/avengers.jpg`,
    },
  ];

  checkAvailability(id: number) {
    window.dispatchEvent(
      new CustomEvent('movieSelected', { detail: { movieId: id } })
    );
  }
}
