import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

type RemoteProps = {
  port: number;
  name: string;
  exposedModule?: string;
  fallback?: string;
};

@Injectable({
  providedIn: 'root',
})
export class MfHelpersService {
  constructor() {}

  async loadRemoteComponent(remoteProps: RemoteProps) {
    let error: unknown | undefined;
    let loadedModule;

    try {
      loadedModule = await loadRemoteModule({
        remoteName: remoteProps.name,
        exposedModule: remoteProps.exposedModule || './Component',
        remoteEntry: `http://localhost:${remoteProps.port}/remoteEntry.json`,
      });
    } catch (err) {
      error = err;
    }

    return [loadedModule, error];
  }
}
