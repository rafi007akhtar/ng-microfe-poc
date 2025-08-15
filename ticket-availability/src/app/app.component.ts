import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public movieId: number | null = null;
  public availability: number[] = [43, 212, 9, 119, 20, 98];
  public availableTickets = 0;

  setAvailability() {
    this.availableTickets = this.availability[this.movieId!];
  }
}
