/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="23.56" cy="17.74" r="1.95"/><circle cx="22.42" cy="25.88" r="1.58"/><circle cx="12.86" cy="17.74" r="1.95"/><circle cx="13.99" cy="25.88" r="1.58"/><path d="M30.83,20H29a19.29,19.29,0,0,0-1.18-5.73l1.46-.79a1,1,0,0,0-.95-1.76l-3,1.64A17.65,17.65,0,0,1,27,20.72C27,27,23.8,31.23,18.8,31.62V15H17.2V31.62C12.22,31.21,9,27,9,20.72a17.74,17.74,0,0,1,1.73-7.34L7.7,11.72a1,1,0,0,0-.95,1.76l1.5.8A19.38,19.38,0,0,0,7.07,20H5.17a1,1,0,0,0,0,2H7.1a14.62,14.62,0,0,0,1.66,6.17L6.87,29.49A1,1,0,1,0,8,31.12l1.84-1.29A10.38,10.38,0,0,0,18,33.66a10.38,10.38,0,0,0,8.14-3.81L28,31.12a1,1,0,1,0,1.15-1.64l-1.86-1.3A14.61,14.61,0,0,0,28.94,22h1.89a1,1,0,0,0,0-2Z"/><path d="M11.51,5.36a1.67,1.67,0,0,0,1.07-.51A3.21,3.21,0,0,1,13.76,6a16.38,16.38,0,0,0-2.65,2.89,2,2,0,0,0,1.61,3.19H23.32A2,2,0,0,0,25.1,11a2,2,0,0,0-.17-2.1A16.34,16.34,0,0,0,22.25,6a3.21,3.21,0,0,1,1.17-1.11A1.68,1.68,0,1,0,23,3.27,4.77,4.77,0,0,0,21,5a5.81,5.81,0,0,0-2.93-1,5.83,5.83,0,0,0-3,1A4.77,4.77,0,0,0,13,3.27a1.68,1.68,0,1,0-1.49,2.09ZM18,6.07c1.45,0,3.53,1.57,5.31,4h0l-10.6,0C14.49,7.63,16.56,6.07,18,6.07Z"/>',

  solid:
    '<path d="M30.83,20H29a19.29,19.29,0,0,0-1.18-5.73l1.46-.79a1,1,0,0,0-.95-1.76l-3,1.28H10.78L7.7,11.72a1,1,0,0,0-.95,1.76l1.5.8A19.38,19.38,0,0,0,7.07,20H5.17a1,1,0,0,0,0,2H7.1a14.62,14.62,0,0,0,1.66,6.17L6.87,29.49A1,1,0,1,0,8,31.12l1.84-1.29A10.29,10.29,0,0,0,17,33.6V15h2V33.6a10.29,10.29,0,0,0,7.16-3.75L28,31.12a1,1,0,1,0,1.15-1.64l-1.86-1.3A14.61,14.61,0,0,0,28.94,22h1.89a1,1,0,0,0,0-2ZM10.91,17.74a1.95,1.95,0,1,1,1.95,1.95A1.95,1.95,0,0,1,10.91,17.74ZM14,27.46a1.58,1.58,0,1,1,1.58-1.58A1.58,1.58,0,0,1,14,27.46Zm8.43,0A1.58,1.58,0,1,1,24,25.88,1.58,1.58,0,0,1,22.42,27.46Zm1.13-7.77a1.95,1.95,0,1,1,1.95-1.95A1.95,1.95,0,0,1,23.56,19.69Z"/><path d="M11.23,5.26a1.67,1.67,0,0,0,.54-.32,5.9,5.9,0,0,1,.89.58,7.44,7.44,0,0,1,.95.94A18.48,18.48,0,0,0,10.79,9.7c-.4.57.09,1.28.86,1.28H24.44c.77,0,1.26-.71.86-1.28a18.38,18.38,0,0,0-2.88-3.28,7.28,7.28,0,0,1,.91-.9,5.9,5.9,0,0,1,.89-.58,1.69,1.69,0,1,0-.56-1.51,7.49,7.49,0,0,0-1.32.83,9.06,9.06,0,0,0-1.19,1.18A5.85,5.85,0,0,0,18,4.3a5.91,5.91,0,0,0-3.17,1.19,9.2,9.2,0,0,0-1.22-1.21,7.49,7.49,0,0,0-1.32-.83,1.68,1.68,0,1,0-1.11,1.83Z"/>',
};

export const bugIconName = 'bug';
export const bugIcon: IconShapeTuple = [bugIconName, renderIcon(icon)];
