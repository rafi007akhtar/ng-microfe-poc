import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MfHelpersService } from './mf-helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('movieList', {
    read: ViewContainerRef,
    static: true,
  })
  listContainer!: ViewContainerRef;

  private listComponentRef: ComponentRef<any> | null = null;

  constructor(private mfHelpers: MfHelpersService) {}

  async ngOnInit(): Promise<void> {
    const moudleName = 'movie-list';
    const [listModule, error] = await this.mfHelpers.loadRemoteComponent({
      name: moudleName,
      port: 4201,
    });
    if (error) {
      console.error(`Error loading moudle ${moudleName}: `, error);
      return;
    }

    this.listContainer.clear();
    this.listComponentRef = this.listContainer.createComponent(
      listModule.AppComponent
    );
    this.listComponentRef.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.listComponentRef?.destroy();
  }
}
