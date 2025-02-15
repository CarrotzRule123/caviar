export interface WorldOptions {
    title: string,
    width: number,
    height: number,
    centered: boolean,
    fullscreen: boolean,
    hidden: boolean,
    resizable: boolean,
    minimized: boolean,
    maximized: boolean,
    flags: null
}

export interface WorldPhysicsOptions {
    gravity: number,
}

export type RGBA = [number, number, number, number];

export interface KeyEvent {
    type: string,
    keycode: number,
    scancode: number,
    mod: number,
    repeat: boolean
}

export interface Frame {
    x: number,
    y: number,
    width: number,
    height: number
}

export interface spriteConfig {
    cols: number,
    rows: number,
}

export interface PixelTexture {
    data: string[];
    palette?: string[];
    pixelWidth?: number;
    pixelHeight?: number;
}