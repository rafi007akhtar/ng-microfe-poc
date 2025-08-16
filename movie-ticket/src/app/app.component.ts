import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MfHelpersService } from './mf-helpers.service';
import { RemoteProps } from './models/common.models';

interface RemoteAndView extends RemoteProps {
  container: ViewContainerRef;
  ref: ComponentRef<any>;
}

type ModuleViewProps = {
  module: any;
  container: ViewContainerRef;
  ref: ComponentRef<any>;
};

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

  @ViewChild('ticketAvailability', {
    read: ViewContainerRef,
    static: true,
  })
  ticketAvailability!: ViewContainerRef;
  private ticketRef: ComponentRef<any> | null = null;

  public remoteData: RemoteAndView[] = [];

  constructor(private mfHelpers: MfHelpersService) {}

  async ngOnInit(): Promise<void> {
    this.remoteData = [
      {
        name: 'movie-list',
        port: 4201,
        container: this.listContainer,
        ref: this.listComponentRef!,
      },
      {
        name: 'ticket-availability',
        port: 4202,
        container: this.ticketAvailability,
        ref: this.ticketRef!,
      },
    ];

    for (let remote of this.remoteData) {
      const [module, error] = await this.mfHelpers.loadRemoteComponent({
        name: remote.name,
        port: remote.port,
      });
      if (error) {
        console.error(`Error loading moudle ${remote.name}: `, error);
        continue;
      }
      this.populateViewWithRemoteModule({
        module,
        container: remote.container,
        ref: remote.ref,
      });
    }
  }

  populateViewWithRemoteModule(modelView: ModuleViewProps) {
    let { module, container, ref } = modelView;
    container.clear();
    ref = container.createComponent(module.AppComponent);
    ref.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.listComponentRef?.destroy();
  }
}
