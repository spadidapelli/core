/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsSelect } from '@cds/core/select';
import '@cds/core/select/register.js';

describe('cds-select', () => {
  let component: CdsSelect;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-select>
        <label>select</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>
    `);

    component = element.querySelector<CdsSelect>('cds-select');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should sync host multiple attr', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('_multiple')).toBe(false);

    component.inputControl.setAttribute('multiple', '');
    await componentIsStable(component);
    expect(component.hasAttribute('_multiple')).toBe(true);
  });

  it('should sync host size attr', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('_size')).toBe(false);

    component.inputControl.setAttribute('size', '');
    await componentIsStable(component);
    expect(component.hasAttribute('_size')).toBe(true);
  });
});
