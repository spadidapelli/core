/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.17756 33.9881C7.91756 33.9881 7.66756 33.8882 7.46756 33.6982L3.22756 29.4598C2.83756 29.0699 2.83756 28.4402 3.22756 28.0503L5.34756 25.9311C6.90756 24.3717 9.44756 24.3717 11.0076 25.9311C12.5676 27.4905 12.5676 30.0296 11.0076 31.589L8.88756 33.7082C8.68756 33.9081 8.43756 33.9981 8.17756 33.9981V33.9881ZM5.34756 28.7501L8.17756 31.579L9.59756 30.1695C10.3776 29.3898 10.3776 28.1203 9.59756 27.3406C8.81756 26.5609 7.54756 26.5609 6.76756 27.3406L5.35756 28.7601L5.34756 28.7501Z"/><path d="M29.6976 11.2266C28.7476 11.2266 27.8476 10.8967 27.1176 10.2769C26.3076 9.5872 25.8076 8.61756 25.7176 7.55795C25.6276 6.49835 25.9676 5.45874 26.6576 4.64904L28.5976 2.35989C28.9576 1.94005 29.5876 1.89007 30.0076 2.24993L34.5776 6.12849C34.9976 6.48835 35.0476 7.11812 34.6876 7.53796L32.7476 9.82711C32.0576 10.6368 31.0876 11.1366 30.0276 11.2266C29.9176 11.2266 29.8076 11.2366 29.6976 11.2366V11.2266ZM29.4776 4.40913L28.1876 5.92856C27.8376 6.33841 27.6776 6.84822 27.7176 7.38802C27.7576 7.91782 28.0076 8.40764 28.4176 8.74751C28.8276 9.09738 29.3476 9.25732 29.8776 9.21734C30.4076 9.17735 30.8976 8.92745 31.2376 8.5176L32.5376 6.99816L29.4876 4.40913H29.4776Z"/><path d="M27.2339 8.29839L9.59867 25.9271L11.0129 27.3408L28.6481 9.71208L27.2339 8.29839Z"/><path d="M17.5213 22.244C18.281 23.0041 19.2805 23.4142 20.3501 23.4142C21.4196 23.4142 22.4192 22.9941 23.1788 22.244C23.9385 21.4938 24.3483 20.4836 24.3483 19.4134C24.3483 18.3432 23.9285 17.343 23.1788 16.5829L21.0697 14.4725L19.6604 15.8827L21.7694 17.9931C22.1493 18.3732 22.3592 18.8733 22.3592 19.4034C22.3592 19.9335 22.1493 20.4436 21.7694 20.8137C21.0098 21.5738 19.7003 21.5738 18.9407 20.8137L16.8316 18.7033L15.4222 20.1136L17.5313 22.224L17.5213 22.244Z"/><path d="M12.6434 20.0735C7.83544 14.1524 5.86629 7.20103 5.20658 4.27046C8.13531 4.93059 15.0823 6.90097 20.9998 11.7119L22.4291 10.2816C14.3126 3.58033 4.52687 2.08004 4.07707 2.01003C3.7672 1.96002 3.44734 2.07004 3.22743 2.29008C3.00753 2.51012 2.89758 2.83019 2.94755 3.14025C3.01752 3.59033 4.51687 13.3722 11.214 21.4938L12.6434 20.0635V20.0735Z"/><path d="M24.6382 12.292C24.4083 12.062 24.1684 11.8319 23.9285 11.6019L22.5091 13.0222C22.749 13.2422 22.9889 13.4623 23.2288 13.7023C29.5061 19.9835 31.9251 28.4251 32.6647 31.7258C29.3562 30.9856 20.9298 28.5652 14.6525 22.284C14.4126 22.0439 14.2027 21.8039 13.9728 21.5638L12.5534 22.9841C12.7733 23.2241 13.0032 23.4642 13.2431 23.6942C21.6595 32.1159 33.3045 33.9062 33.7943 33.9762C33.8442 33.9762 33.8942 33.9862 33.9342 33.9862C34.1941 33.9862 34.454 33.8862 34.6439 33.6962C34.8638 33.4761 34.9737 33.1561 34.9238 32.846C34.8538 32.3559 33.0646 20.7036 24.6482 12.282L24.6382 12.292Z"/><path d="M14.6925 13.7623C13.9328 14.5224 13.523 15.5226 13.523 16.5928C13.523 17.323 13.7329 18.0131 14.0927 18.6232L15.6021 17.1129C15.5521 16.9429 15.5221 16.7729 15.5221 16.5928C15.5221 16.0627 15.732 15.5526 16.1119 15.1826C16.4917 14.8025 16.9915 14.5925 17.5213 14.5925C17.7012 14.5925 17.8711 14.6225 18.041 14.6725L19.5504 13.1622C18.9406 12.8021 18.2509 12.5921 17.5213 12.5921C16.4517 12.5921 15.4521 13.0121 14.6925 13.7623Z"/>',
  solid:
    '<path d="M8.17756 33.9881C7.91756 33.9881 7.66756 33.8882 7.46756 33.6982L3.22756 29.4598C2.83756 29.0699 2.83756 28.4402 3.22756 28.0503L5.34756 25.9311C6.90756 24.3717 9.44756 24.3717 11.0076 25.9311C12.5676 27.4905 12.5676 30.0296 11.0076 31.589L8.88756 33.7082C8.68756 33.9081 8.43756 33.9981 8.17756 33.9981V33.9881Z"/><path d="M29.6976 11.2266C28.7476 11.2266 27.8476 10.8967 27.1176 10.2769C26.3076 9.5872 25.8076 8.61756 25.7176 7.55795C25.6276 6.49835 25.9676 5.45874 26.6576 4.64904L28.5976 2.35989C28.9576 1.94005 29.5876 1.89007 30.0076 2.24993L34.5776 6.12849C34.9976 6.48835 35.0476 7.11812 34.6876 7.53796L32.7476 9.82711C32.0576 10.6368 31.0876 11.1366 30.0276 11.2266C29.9176 11.2266 29.8076 11.2366 29.6976 11.2366V11.2266Z"/><path d="M27.2339 8.29839L9.59867 25.9271L11.0129 27.3408L28.6481 9.71208L27.2339 8.29839Z"/><path d="M13.5296 16.5846C13.5296 15.515 13.9497 14.5154 14.6998 13.7556C15.45 12.9959 16.4602 12.5861 17.5304 12.5861C18.2605 12.5861 18.9506 12.796 19.5608 13.1559L22.4313 10.2869C14.3198 3.57944 4.52787 2.07999 4.07778 2.01002C3.76772 1.96004 3.44766 2.07 3.22761 2.28992C3.00757 2.50983 2.89755 2.82972 2.94756 3.1396C3.01757 3.58943 4.51786 13.3658 11.2192 21.4828L14.0897 18.6138C13.7296 18.0041 13.5196 17.3143 13.5196 16.5846H13.5296Z"/><path d="M17.5304 14.5853C17.0003 14.5853 16.4902 14.7953 16.1201 15.1751C15.74 15.555 15.53 16.0548 15.53 16.5846C15.53 16.7645 15.56 16.9345 15.61 17.1044L18.0605 14.6553C17.8904 14.6053 17.7204 14.5753 17.5404 14.5753L17.5304 14.5853Z"/><path d="M21.7712 20.823C22.1513 20.4432 22.3613 19.9433 22.3613 19.4135C22.3613 18.8837 22.1513 18.3739 21.7712 18.0041L19.6608 15.8949L16.8302 18.7238L18.9406 20.833C19.7008 21.5927 21.011 21.5927 21.7712 20.833V20.823Z"/><path d="M24.6517 12.2862C24.4217 12.0563 24.1817 11.8264 23.9416 11.5965L21.0711 14.4654L23.1815 16.5746C23.9416 17.3343 24.3517 18.3339 24.3517 19.4035C24.3517 20.4731 23.9316 21.4728 23.1815 22.2325C22.4313 22.9922 21.4211 23.4021 20.3509 23.4021C19.2807 23.4021 18.2805 22.9822 17.5204 22.2325L15.41 20.1233L12.5394 22.9922C12.7595 23.2321 12.9895 23.472 13.2295 23.7019C21.6512 32.1188 33.3034 33.9081 33.7935 33.9781C33.8435 33.9781 33.8935 33.9881 33.9335 33.9881C34.1936 33.9881 34.4536 33.8881 34.6437 33.6982C34.8637 33.4783 34.9737 33.1584 34.9237 32.8485C34.8537 32.3587 33.0634 20.7131 24.6417 12.2962L24.6517 12.2862Z"/>',
};

export const canoeIconName = 'canoe';
export const canoeIcon: IconShapeTuple = [canoeIconName, renderIcon(icon)];
