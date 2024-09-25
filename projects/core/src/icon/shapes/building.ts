/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12.0014 24.04H13.9993V22.05H12.0014V24.04ZM12.0014 20.05H13.9993V18.06H12.0014V20.05ZM12.0014 16.07H13.9993V14.08H12.0014V16.07ZM12.0014 8.1H13.9993V6.11H12.0014V8.1ZM12.0014 12.09H13.9993V10.1H12.0014V12.09ZM7.9957 20.06H9.99355V18.07H7.9957V20.06ZM7.9957 12.09H9.99355V10.1H7.9957V12.09ZM7.9957 24.05H9.99355V22.06H7.9957V24.05ZM7.9957 16.08H9.99355V14.09H7.9957V16.08ZM7.9957 8.11H9.99355V6.12H7.9957V8.11ZM25.9964 23.05H27.9943V21.06H25.9964V23.05ZM19.8824 2H6.11832C4.95375 2 4 2.95 4 4.11V34H22.0007V4.11C22.0007 2.94 21.047 2 19.8824 2ZM20.0029 32.01H16.0072V28.03H10.0036V32.01H5.99785V4.23C5.99785 4.23 6.00789 4.17 6.02797 4.15C6.04805 4.13 6.07816 4.12 6.10828 4.12H19.8724C19.8724 4.12 19.9326 4.13 19.9527 4.15C19.9727 4.17 19.9828 4.2 19.9828 4.23V32.01H20.0029ZM30.0021 11.09H23.9986V13.08H30.0021V32.01H23.9986V34H32V13.08C32 11.98 31.1065 11.09 30.0021 11.09ZM26.0065 27.03H28.0043V25.04H26.0065V27.03ZM16.0072 24.04H18.005V22.05H16.0072V24.04ZM28.0143 17.07H26.0165V19.06H28.0143V17.07ZM16.0072 8.1H18.005V6.11H16.0072V8.1ZM16.0072 20.06H18.005V18.07H16.0072V20.06ZM16.0072 16.08H18.005V14.09H16.0072V16.08ZM16.0072 12.09H18.005V10.1H16.0072V12.09Z"/>',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z"/><path d="M30.0021 15.0367H32V34H23.9986V32.01H30.0021V15.0367Z"/><path d="M22.0007 6.04897V4.11C22.0007 2.94 21.047 2 19.8824 2H6.11832C4.95375 2 4 2.95 4 4.11V34H22.0007V15.0195C21.239 14.9403 20.5215 14.6007 19.9828 14.0523V32.01H16.0072V28.03H10.0036V32.01H5.99785V4.23C5.99785 4.23 6.00789 4.17 6.02797 4.15C6.04805 4.13 6.07816 4.12 6.10828 4.12H19.8724C19.8724 4.12 19.9326 4.13 19.9527 4.15C19.9727 4.17 19.9828 4.2 19.9828 4.23V9.39901L22.0007 6.04897Z"/><path d="M13.9993 24.04H12.0014V22.05H13.9993V24.04Z"/><path d="M13.9993 20.05H12.0014V18.06H13.9993V20.05Z"/><path d="M13.9993 16.07H12.0014V14.08H13.9993V16.07Z"/><path d="M13.9993 8.1H12.0014V6.11H13.9993V8.1Z"/><path d="M13.9993 12.09H12.0014V10.1H13.9993V12.09Z"/><path d="M9.99355 20.06H7.9957V18.07H9.99355V20.06Z"/><path d="M9.99355 12.09H7.9957V10.1H9.99355V12.09Z"/><path d="M9.99355 24.05H7.9957V22.06H9.99355V24.05Z"/><path d="M9.99355 16.08H7.9957V14.09H9.99355V16.08Z"/><path d="M9.99355 8.11H7.9957V6.12H9.99355V8.11Z"/><path d="M27.9943 23.05H25.9964V21.06H27.9943V23.05Z"/><path d="M28.0043 27.03H26.0065V25.04H28.0043V27.03Z"/><path d="M18.005 24.04H16.0072V22.05H18.005V24.04Z"/><path d="M26.0165 17.07H28.0143V19.06H26.0165V17.07Z"/><path d="M18.005 8.1H16.0072V6.11H18.005V8.1Z"/><path d="M18.005 20.06H16.0072V18.07H18.005V20.06Z"/><path d="M18.005 16.08H16.0072V14.09H18.005V16.08Z"/><path d="M18.005 12.09H16.0072V10.1H18.005V12.09Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M31.9726 12.7494C31.3772 12.9128 30.7501 13 30.1025 13C28.2346 13 26.5369 12.2741 25.2782 11.09H23.9986V13.08H30.0021V32.01H23.9986V34H32V13.08C32 12.9674 31.9906 12.8569 31.9726 12.7494Z"/><path d="M27.9943 23.05H25.9964V21.06H27.9943V23.05Z"/><path d="M13.9993 24.04H12.0014V22.05H13.9993V24.04Z"/><path d="M13.9993 20.05H12.0014V18.06H13.9993V20.05Z"/><path d="M13.9993 16.07H12.0014V14.08H13.9993V16.07Z"/><path d="M13.9993 8.1H12.0014V6.11H13.9993V8.1Z"/><path d="M13.9993 12.09H12.0014V10.1H13.9993V12.09Z"/><path d="M9.99355 20.06H7.9957V18.07H9.99355V20.06Z"/><path d="M9.99355 12.09H7.9957V10.1H9.99355V12.09Z"/><path d="M9.99355 24.05H7.9957V22.06H9.99355V24.05Z"/><path d="M9.99355 16.08H7.9957V14.09H9.99355V16.08Z"/><path d="M9.99355 8.11H7.9957V6.12H9.99355V8.11Z"/><path d="M18.005 24.04H16.0072V22.05H18.005V24.04Z"/><path d="M18.005 8.1H16.0072V6.11H18.005V8.1Z"/><path d="M18.005 20.06H16.0072V18.07H18.005V20.06Z"/><path d="M18.005 16.08H16.0072V14.09H18.005V16.08Z"/><path d="M18.005 12.09H16.0072V10.1H18.005V12.09Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.11832 2H19.8824C21.047 2 22.0007 2.94 22.0007 4.11V34H4V4.11C4 2.95 4.95375 2 6.11832 2ZM16.0072 32.01H19.9828V4.23C19.9828 4.2 19.9727 4.17 19.9527 4.15C19.9326 4.13 19.8724 4.12 19.8724 4.12H6.10828C6.07816 4.12 6.04805 4.13 6.02797 4.15C6.00789 4.17 5.99785 4.23 5.99785 4.23V32.01H10.0036V28.03H16.0072V32.01Z"/><path d="M28.0043 27.03H26.0065V25.04H28.0043V27.03Z"/><path d="M26.0165 17.07H28.0143V19.06H26.0165V17.07Z"/>',

  solid:
    '<path d="M29.9964 11.04H23.9857V33.95H32V13.03C32 11.93 31.0984 11.04 29.9964 11.04ZM28.1231 27.08H25.9292V24.89H28.1231V27.08ZM28.1231 23.1H25.9292V20.91H28.1231V23.1ZM28.1231 19.11H25.9292V16.92H28.1231V19.11ZM19.9084 2H6.12379C4.9517 2 4 2.95 4 4.11V34H10.0107V28.01H16.0215V34H22.0322V4.11C22.0322 2.94 21.0805 2 19.9084 2ZM10.1009 24.04H7.90698V21.85H10.1009V24.04ZM10.1009 20.05H7.90698V17.86H10.1009V20.05ZM10.1009 16.07H7.90698V13.88H10.1009V16.07ZM10.1009 12.08H7.90698V9.89H10.1009V12.08ZM10.1009 8.09H7.90698V5.9H10.1009V8.09ZM14.098 24.03H11.9041V21.84H14.098V24.03ZM14.098 20.04H11.9041V17.85H14.098V20.04ZM14.098 16.06H11.9041V13.87H14.098V16.06ZM14.098 12.07H11.9041V9.88H14.098V12.07ZM14.098 8.08H11.9041V5.89H14.098V8.08ZM18.0952 24.02H15.9013V21.83H18.0952V24.02ZM18.0952 20.03H15.9013V17.84H18.0952V20.03ZM18.0952 16.05H15.9013V13.86H18.0952V16.05ZM18.0952 12.06H15.9013V9.87H18.0952V12.06ZM18.1453 8.12H15.9513V5.93H18.1453V8.12Z"/>',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9857 15.0367H32V33.95H23.9857V15.0367ZM25.9292 27.08H28.1231V24.89H25.9292V27.08ZM25.9292 23.1H28.1231V20.91H25.9292V23.1ZM25.9292 19.11H28.1231V16.92H25.9292V19.11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.0322 5.87864L19.5362 10.0387C18.8703 11.0423 18.8204 12.3342 19.4206 13.3893C19.9708 14.3567 20.9642 14.9505 22.0322 15.0285V34H16.0215V28.01H10.0107V34H4V4.11C4 2.95 4.9517 2 6.12379 2H19.9084C21.0805 2 22.0322 2.94 22.0322 4.11V5.87864ZM7.90698 24.04H10.1009V21.85H7.90698V24.04ZM7.90698 20.05H10.1009V17.86H7.90698V20.05ZM7.90698 16.07H10.1009V13.88H7.90698V16.07ZM7.90698 12.08H10.1009V9.89H7.90698V12.08ZM7.90698 8.09H10.1009V5.9H7.90698V8.09ZM11.9041 24.03H14.098V21.84H11.9041V24.03ZM11.9041 20.04H14.098V17.85H11.9041V20.04ZM11.9041 16.06H14.098V13.87H11.9041V16.06ZM11.9041 12.07H14.098V9.88H11.9041V12.07ZM11.9041 8.08H14.098V5.89H11.9041V8.08ZM15.9013 24.02H18.0952V21.83H15.9013V24.02ZM15.9013 20.03H18.0952V17.84H15.9013V20.03ZM15.9013 16.05H18.0952V13.86H15.9013V16.05ZM15.9013 12.06H18.0952V9.87H15.9013V12.06ZM15.9513 8.12H18.1453V5.93H15.9513V8.12Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.9753 12.7174C31.3489 12.9013 30.686 13 30 13C28.1133 13 26.401 12.2536 25.1422 11.04H23.9857V33.95H32V13.03C32 12.9236 31.9916 12.8192 31.9753 12.7174ZM25.9292 27.08H28.1231V24.89H25.9292V27.08ZM25.9292 23.1H28.1231V20.91H25.9292V23.1ZM25.9292 19.11H28.1231V16.92H25.9292V19.11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.12379 2H19.9084C21.0805 2 22.0322 2.94 22.0322 4.11V34H16.0215V28.01H10.0107V34H4V4.11C4 2.95 4.9517 2 6.12379 2ZM7.90698 24.04H10.1009V21.85H7.90698V24.04ZM7.90698 20.05H10.1009V17.86H7.90698V20.05ZM7.90698 16.07H10.1009V13.88H7.90698V16.07ZM7.90698 12.08H10.1009V9.89H7.90698V12.08ZM7.90698 8.09H10.1009V5.9H7.90698V8.09ZM11.9041 24.03H14.098V21.84H11.9041V24.03ZM11.9041 20.04H14.098V17.85H11.9041V20.04ZM11.9041 16.06H14.098V13.87H11.9041V16.06ZM11.9041 12.07H14.098V9.88H11.9041V12.07ZM11.9041 8.08H14.098V5.89H11.9041V8.08ZM15.9013 24.02H18.0952V21.83H15.9013V24.02ZM15.9013 20.03H18.0952V17.84H15.9013V20.03ZM15.9013 16.05H18.0952V13.86H15.9013V16.05ZM15.9013 12.06H18.0952V9.87H15.9013V12.06ZM15.9513 8.12H18.1453V5.93H15.9513V8.12Z"/>',
};

export const buildingIconName = 'building';
export const buildingIcon: IconShapeTuple = [buildingIconName, renderIcon(icon)];
