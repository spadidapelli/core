/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.9947 16C18.8532 16 21.992 12.86 21.992 9C21.992 5.14 18.8532 2 14.9947 2C11.1362 2 7.99743 5.14 7.99743 9C7.99743 12.86 11.1362 16 14.9947 16ZM14.9947 4C17.7536 4 19.9927 6.24 19.9927 9C19.9927 11.76 17.7536 14 14.9947 14C12.2358 14 9.99665 11.76 9.99665 9C9.99665 6.24 12.2358 4 14.9947 4ZM33.6974 20.88C33.3075 20.49 32.6778 20.49 32.2879 20.88L22.002 31.17L16.714 25.88C16.3242 25.49 15.6944 25.49 15.3046 25.88C14.9147 26.27 14.9147 26.9 15.3046 27.29L22.012 34L33.7174 22.29C34.1072 21.9 34.1072 21.27 33.7174 20.88H33.6974ZM25.5206 23.46C25.8005 23.68 25.9704 24 25.9904 24.35L27.5398 22.8C27.3299 22.45 27.08 22.13 26.7401 21.87C24.8708 20.43 20.8524 18.02 15.0047 18.02C9.15697 18.02 5.13854 20.44 3.26927 21.87C2.46959 22.48 2.00977 23.41 2.00977 24.41V29.01C2.00977 29.56 2.45959 30.01 3.00938 30.01C3.55916 30.01 4.00898 29.56 4.00898 29.01V24.41C4.00898 24.03 4.17892 23.68 4.4888 23.45C6.15814 22.16 9.74674 20.01 15.0047 20.01C20.2626 20.01 23.8512 22.17 25.5206 23.45V23.46Z"/>',
  solid:
    '<path d="M14.9909 16C18.8482 16 21.9859 12.86 21.9859 9C21.9859 5.14 18.8482 2 14.9909 2C11.1336 2 7.99578 5.14 7.99578 9C7.99578 12.86 11.1336 16 14.9909 16ZM12.9923 26.59C12.9923 25.79 13.3021 25.04 13.8717 24.47C14.4413 23.9 15.1907 23.59 15.9902 23.59C16.7896 23.59 17.5391 23.9 18.1087 24.47L21.9859 28.35L27.532 22.8C27.3222 22.45 27.0624 22.12 26.7226 21.86C24.8539 20.42 20.8368 18.01 14.9909 18.01C9.14498 18.01 5.1278 20.43 3.25911 21.86C2.45968 22.47 2 23.4 2 24.4V29.02C2 29.57 2.44968 30.02 2.9993 30.02C3.03927 30.02 3.06925 30 3.10922 30H15.1607L13.8717 28.71C13.3021 28.14 12.9923 27.39 12.9923 26.59ZM33.6877 20.88C33.298 20.49 32.6684 20.49 32.2787 20.88L21.9959 31.17L16.7097 25.88C16.3199 25.49 15.6904 25.49 15.3006 25.88C14.9109 26.27 14.9109 26.9 15.3006 27.29L22.0059 34L33.7077 22.29C34.0974 21.9 34.0974 21.27 33.7077 20.88H33.6877Z"/>',
};

export const assignUserIconName = 'assign-user';
export const assignUserIcon: IconShapeTuple = [assignUserIconName, renderIcon(icon)];
