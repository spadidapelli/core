/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"/><path d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>',

  outlineAlerted:
    '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/><path d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>',

  outlineBadged:
    '<path d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/><path d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>',

  solid:
    '<path d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>',

  solidAlerted:
    '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>',

  solidBadged:
    '<path d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>',
};

export const tickChartIconName = 'tick-chart';
export const tickChartIcon: IconShapeTuple = [tickChartIconName, renderIcon(icon)];
