/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsDate } from './date.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/button-action/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { calendarIcon } from '@cds/core/icon/shapes/calendar.js';

ClarityIcons.addIcons(calendarIcon);

registerElementSafely('cds-date', CdsDate);

declare global {
  interface HTMLElementTagNameMap {
    'cds-date': CdsDate;
  }
}
