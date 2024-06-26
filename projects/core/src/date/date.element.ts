/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import styles from './date.global.scss';

/**
 * Date
 *
 * ```typescript
 * import '@cds/core/date/register.js';
 * ```
 *
 * ```html
 * <cds-date>
 *   <label>Date</label>
 *   <input type="date" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-date>
 * ```
 *
 * @element cds-date
 * @slot - For projecting date input and label
 */
export class CdsDate extends CdsControl {
  @globalStyle() protected globalStyles = styles;

  protected get suffixDefaultTemplate() {
    return html`<cds-button-action shape="calendar" readonly></cds-button-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }
}
