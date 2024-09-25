/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18 7.2C12.0353 7.2 7.2 12.0353 7.2 18C7.2 23.9647 12.0353 28.8 18 28.8C23.9647 28.8 28.8 23.9647 28.8 18C28.7945 12.0376 23.9624 7.20551 18 7.2ZM12.31 18C12.31 14.8575 14.8575 12.31 18 12.31C21.1425 12.31 23.69 14.8575 23.69 18C23.69 21.1425 21.1425 23.69 18 23.69C14.8575 23.69 12.31 21.1425 12.31 18ZM14.2204 19.5529C14.8528 21.0824 16.3448 22.08 18 22.08V22.09C20.2588 22.09 22.09 20.2588 22.09 18C22.094 16.3448 21.1001 14.8504 19.5721 14.2142C18.0441 13.578 16.2833 13.9255 15.1115 15.0944C13.9397 16.2633 13.5879 18.0233 14.2204 19.5529ZM8.8 18C8.8 23.081 12.919 27.2 18 27.2C23.0787 27.1945 27.1945 23.0787 27.2 18C27.2 12.919 23.081 8.8 18 8.8C12.919 8.8 8.8 12.919 8.8 18ZM4 18C4 25.732 10.268 32 18 32C21.713 32 25.274 30.525 27.8995 27.8995C30.525 25.274 32 21.713 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18Z"/>',
  solid:
    '<path d="M22.09 18C22.09 20.2588 20.2588 22.09 18 22.09C15.7412 22.09 13.91 20.2588 13.91 18C13.91 15.7412 15.7412 13.91 18 13.91C20.2588 13.91 22.09 15.7412 22.09 18Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.83 18C7.83 12.3833 12.3833 7.83 18 7.83C23.6145 7.83551 28.1645 12.3855 28.17 18C28.17 23.6167 23.6167 28.17 18 28.17C12.3833 28.17 7.83 23.6167 7.83 18ZM18 23.83C15.6172 23.8299 13.4701 22.3918 12.563 20.1885C11.6559 17.9851 12.1682 15.4522 13.8602 13.7745C15.5523 12.0968 18.0895 11.6062 20.285 12.5321C22.4806 13.458 23.9003 15.6173 23.88 18C23.88 21.2474 21.2474 23.88 18 23.88V23.83Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18 29.83C11.4665 29.83 6.17 24.5335 6.17 18C6.17 11.4665 11.4665 6.17 18 6.17C24.5335 6.17 29.83 11.4665 29.83 18C29.819 24.529 24.529 29.819 18 29.83Z"/>',
};

export const targetIconName = 'target';
export const targetIcon: IconShapeTuple = [targetIconName, renderIcon(icon)];
