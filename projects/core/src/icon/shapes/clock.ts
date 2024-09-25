/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM13.2043 9.15001C9.98154 10.8963 7.98137 14.2745 8 17.94C8.01799 22.6777 11.358 26.7525 16 27.7L15.73 29.23C11.1503 28.3409 7.55514 24.7841 6.61706 20.2142C5.67898 15.6443 7.5822 10.9587 11.4413 8.3374C15.3004 5.71607 20.3575 5.6737 24.26 8.23L23.41 9.59C20.3495 7.57282 16.4271 7.40372 13.2043 9.15001ZM18.92 10.75V18.4L23.93 21.81C24.2489 21.9986 24.4375 22.348 24.42 22.7181C24.4025 23.0882 24.1817 23.4183 23.8464 23.5759C23.5111 23.7335 23.1161 23.6927 22.82 23.47L16.92 19.47V10.75C16.92 10.1977 17.3677 9.75 17.92 9.75C18.4723 9.75 18.92 10.1977 18.92 10.75ZM4 18C4 25.732 10.268 32 18 32C21.713 32 25.274 30.525 27.8995 27.8995C30.525 25.274 32 21.713 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18Z"/>',

  outlineAlerted:
    '<path d="M23.724 3.05893C21.9139 2.36545 19.9758 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.9989 33.9062 16.0074 33.7234 15.0373C33.7035 15.0373 33.6836 15.0371 33.6637 15.0367H31.6858C31.8916 15.9919 32 16.9833 32 18C32 21.713 30.525 25.274 27.8995 27.8995C25.274 30.525 21.713 32 18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4C19.6408 4 21.2158 4.28228 22.6788 4.80093L23.724 3.05893Z"/><path d="M21.4293 6.88358C18.1069 5.82799 14.4177 6.31561 11.4413 8.3374C7.5822 10.9587 5.67898 15.6443 6.61706 20.2142C7.55514 24.7841 11.1503 28.3409 15.73 29.23L16 27.7C11.358 26.7525 8.01799 22.6777 8 17.94C7.98137 14.2745 9.98154 10.8963 13.2043 9.15001C15.4951 7.90873 18.1393 7.6352 20.5763 8.30524L21.4293 6.88358Z"/><path d="M18.92 18.4V10.75C18.92 10.1977 18.4723 9.75 17.92 9.75C17.3677 9.75 16.92 10.1977 16.92 10.75V19.47L22.82 23.47C23.1161 23.6927 23.5111 23.7335 23.8464 23.5759C24.1817 23.4183 24.4025 23.0882 24.42 22.7181C24.4375 22.348 24.2489 21.9986 23.93 21.81L18.92 18.4Z"/><path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/>',

  outlineBadged:
    '<path d="M23.185 7.60548C23.3073 8.12677 23.4879 8.62561 23.7195 9.09476L23.41 9.59C20.3495 7.57282 16.4271 7.40372 13.2043 9.15001C9.98154 10.8963 7.98137 14.2745 8 17.94C8.01799 22.6777 11.358 26.7525 16 27.7L15.73 29.23C11.1503 28.3409 7.55514 24.7841 6.61706 20.2142C5.67898 15.6443 7.5822 10.9587 11.4413 8.3374C14.9546 5.95092 19.461 5.70199 23.185 7.60548Z"/><path d="M31.0505 12.9217C31.6636 14.4961 32 16.2087 32 18C32 21.713 30.525 25.274 27.8995 27.8995C25.274 30.525 21.713 32 18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4C19.7913 4 21.5039 4.33641 23.0783 4.94948C23.1799 4.2745 23.3779 3.63108 23.6577 3.0337C21.8667 2.35659 19.9517 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.0483 33.6434 14.1333 32.9663 12.3423C32.3689 12.6221 31.7255 12.8201 31.0505 12.9217Z"/><path d="M18.92 18.4V10.75C18.92 10.1977 18.4723 9.75 17.92 9.75C17.3677 9.75 16.92 10.1977 16.92 10.75V19.47L22.82 23.47C23.1161 23.6927 23.5111 23.7335 23.8464 23.5759C24.1817 23.4183 24.4025 23.0882 24.42 22.7181C24.4375 22.348 24.2489 21.9986 23.93 21.81L18.92 18.4Z"/><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/>',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM24.2 23.18C24.0533 23.402 23.8241 23.5564 23.5632 23.6089C23.3023 23.6615 23.0312 23.6079 22.81 23.46L16.91 19.46V10.75C16.91 10.1977 17.3577 9.75 17.91 9.75C18.4623 9.75 18.91 10.1977 18.91 10.75V18.4L23.91 21.79C24.1336 21.9351 24.2901 22.1636 24.3445 22.4246C24.399 22.6856 24.347 22.9575 24.2 23.18ZM11.4733 8.62966C15.1598 6.06957 20.006 5.91307 23.85 8.23L24.7 6.86C20.3082 4.19016 14.7557 4.35847 10.5336 7.28943C6.31159 10.2204 4.21273 15.3637 5.17871 20.4117C6.14469 25.4598 9.99414 29.4649 15 30.63L15.31 29.06C10.9459 28.0117 7.60428 24.4983 6.7759 20.0872C5.94752 15.6761 7.78686 11.1898 11.4733 8.62966Z"/>',

  solidAlerted:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.724 3.05893C21.9139 2.36545 19.9758 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.9989 33.9062 16.0074 33.7234 15.0373C33.7035 15.0373 33.6836 15.0371 33.6637 15.0367H22.3395C21.1577 15.0604 20.0233 14.4489 19.4206 13.3893C18.8204 12.3342 18.8703 11.0423 19.5362 10.0387L21.3035 7.09317C18.0128 6.08609 14.382 6.60969 11.4733 8.62966C7.78686 11.1898 5.94752 15.6761 6.7759 20.0872C7.60428 24.4983 10.9459 28.0117 15.31 29.06L15 30.63C9.99414 29.4649 6.14469 25.4598 5.17871 20.4117C4.21273 15.3637 6.31159 10.2204 10.5336 7.28943C13.9743 4.90091 18.2985 4.34708 22.1581 5.66881L23.724 3.05893ZM23.5632 23.6089C23.8241 23.5564 24.0533 23.402 24.2 23.18C24.347 22.9575 24.399 22.6856 24.3445 22.4246C24.2901 22.1636 24.1336 21.9351 23.91 21.79L18.91 18.4V10.75C18.91 10.1977 18.4623 9.75 17.91 9.75C17.3577 9.75 16.91 10.1977 16.91 10.75V19.46L22.81 23.46C23.0312 23.6079 23.3023 23.6615 23.5632 23.6089Z"/><path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.9663 12.3423C32.0656 12.7642 31.0604 13 30 13C26.7918 13 24.0877 10.8417 23.2604 7.89796C19.5196 5.935 14.9737 6.19883 11.4733 8.62966C7.78686 11.1898 5.94752 15.6761 6.7759 20.0872C7.60428 24.4983 10.9459 28.0117 15.31 29.06L15 30.63C9.99414 29.4649 6.14469 25.4598 5.17871 20.4117C4.21273 15.3637 6.31159 10.2204 10.5336 7.28943C14.2269 4.72558 18.9381 4.27566 23 5.99022C23.0015 4.93346 23.2371 3.93159 23.6577 3.0337C21.8667 2.35659 19.9517 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.0483 33.6434 14.1333 32.9663 12.3423ZM23.5632 23.6089C23.8241 23.5564 24.0533 23.402 24.2 23.18C24.347 22.9575 24.399 22.6856 24.3445 22.4246C24.2901 22.1636 24.1336 21.9351 23.91 21.79L18.91 18.4V10.75C18.91 10.1977 18.4623 9.75 17.91 9.75C17.3577 9.75 16.91 10.1977 16.91 10.75V19.46L22.81 23.46C23.0312 23.6079 23.3023 23.6615 23.5632 23.6089Z"/>',
};

export const clockIconName = 'clock';
export const clockIcon: IconShapeTuple = [clockIconName, renderIcon(icon)];
