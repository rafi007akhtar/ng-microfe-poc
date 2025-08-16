import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  MOVIE_SELECTION_EVENT = 'movieSelected';

  public movieId: number | null = null;
  public availability: number[] = [43, 212, 9, 119, 20, 98];
  public availableTickets = 0;

  ngOnInit(): void {
    window.addEventListener(this.MOVIE_SELECTION_EVENT, (evt: Event) => {
      this.movieId = (evt as any).detail.movieId;
      this.setAvailability();
    });
  }

  setAvailability() {
    this.availableTickets = this.availability[this.movieId!];
  }

  ngOnDestroy(): void {
    window.removeEventListener(this.MOVIE_SELECTION_EVENT, () => {});
  }
}
