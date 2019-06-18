import { WebPlugin } from '@capacitor/core';
import { Cam2CanvasPluginPlugin } from './definitions';

export class Cam2CanvasPluginWeb extends WebPlugin implements Cam2CanvasPluginPlugin {
  constructor() {
    super({
      name: 'Cam2CanvasPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Cam2CanvasPlugin = new Cam2CanvasPluginWeb();

export { Cam2CanvasPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Cam2CanvasPlugin);
