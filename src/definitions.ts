declare module "@capacitor/core" {
  interface PluginRegistry {
    Cam2CanvasPlugin: Cam2CanvasPluginPlugin;
  }
}

export interface Cam2CanvasPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
