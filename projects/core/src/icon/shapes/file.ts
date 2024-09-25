/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.71 10.49L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V11.19C30 10.92 29.89 10.67 29.71 10.48V10.49ZM20.8 4.41L27.59 11.2H20.8V4.41ZM28 32H8V4H19.2V12.8H28V32Z"/>',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/><path d="M23.1821 3.96211L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V15.0367H28V32H8V4H19.2V10.7002C19.285 10.4703 19.3972 10.2482 19.5362 10.0387L20.8 7.93235V4.41L22.1209 5.73087L23.1821 3.96211Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.274 4.05404L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V13C28.1977 13 26.5545 12.3189 25.3138 11.2H20.8V4.41L23.0288 6.63875C23.0097 6.42838 23 6.21533 23 6C23 5.32475 23.0956 4.67183 23.274 4.05404ZM8 32H28V12.8H19.2V4H8V32Z"/>',

  solid:
    '<path d="M29.71 10.49L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V11.19C30 10.92 29.89 10.67 29.71 10.48V10.49ZM20.8 11.2V3.8L28.2 11.2H20.8Z"/>',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/><path d="M23.1821 3.96211L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V15.0367H22.3395C21.1577 15.0604 20.0233 14.4489 19.4206 13.3893C18.8204 12.3342 18.8703 11.0423 19.5362 10.0387L20.8 7.93235V3.8L22.3496 5.34962L23.1821 3.96211Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M23.274 4.05404L21.51 2.29C21.32 2.1 21.07 2 20.8 2H7C6.45 2 6 2.45 6 3V33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33V13C28.1977 13 26.5545 12.3189 25.3138 11.2H20.8V3.8L23 6C23 5.32475 23.0956 4.67183 23.274 4.05404Z"/>',
};

export const fileIconName = 'file';
export const fileIcon: IconShapeTuple = [fileIconName, renderIcon(icon)];
