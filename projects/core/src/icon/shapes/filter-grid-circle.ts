/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18C32 21.713 30.525 25.274 27.8995 27.8995C25.274 30.525 21.713 32 18 32ZM17 26.86L15 25.86V20.68L8.42 14C8.15679 13.733 8.0064 13.3749 8 13V12C8 11.4477 8.44772 11 9 11H27C27.5523 11 28 11.4477 28 12V13C27.9936 13.3749 27.8432 13.733 27.58 14L21 20.68V29L19 28L19.03 20.27C19.0311 20.0077 19.1353 19.7563 19.32 19.57L25.79 13H10.23L16.71 19.57C16.8947 19.7563 16.9989 20.0077 17 20.27V26.86Z"/>',
  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18C32 21.713 30.525 25.274 27.8995 27.8995C25.274 30.525 21.713 32 18 32ZM8 12.12V11H27.98V12.14C27.9781 12.2719 27.9242 12.3977 27.83 12.49L20.71 19.74C20.6081 19.8299 20.5438 19.9548 20.53 20.09V28.48C20.5303 28.6528 20.4415 28.8134 20.295 28.905C20.1485 28.9966 19.9651 29.006 19.81 28.93L15.86 27.52C15.6883 27.4359 15.5796 27.2612 15.58 27.07V20.18C15.5781 20.0481 15.5242 19.9223 15.43 19.83L8.15 12.47C8.05579 12.3777 8.00188 12.2519 8 12.12Z"/>',
};

export const filterGridCircleIconName = 'filter-grid-circle';
export const filterGridCircleIcon: IconShapeTuple = [filterGridCircleIconName, renderIcon(icon)];
