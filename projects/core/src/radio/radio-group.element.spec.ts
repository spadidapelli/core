/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsRadioGroup } from '@cds/core/radio';
import '@cds/core/radio/register.js';
import '@cds/core/selection-panels/radio/register.js';

describe('cds-radio-group', () => {
  let component: CdsRadioGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-radio-group>
        <label>radio group</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" value="1" checked />
        </cds-radio>
        <cds-radio>
          <label>radio 2</label>
          <input type="radio" value="2" />
        </cds-radio>
        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>
    `);

    component = element.querySelector<CdsRadioGroup>('cds-radio-group');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should associate radios', async () => {
    const radio1 = component.querySelectorAll('cds-radio')[0];
    const radio2 = component.querySelectorAll('cds-radio')[1];
    expect(radio1.inputControl.name).toBe(radio2.inputControl.name);
  });

  it('should sync radio controls within group', async () => {
    await componentIsStable(component);
    const radio1 = component.querySelectorAll('cds-radio')[0];
    const radio2 = component.querySelectorAll('cds-radio')[1];
    expect(radio1.inputControl.hasAttribute('checked')).toBe(true);
    expect(radio2.inputControl.hasAttribute('checked')).toBe(false);

    // radio2.inputControl.click();
    // await componentIsStable(component);
    // expect(radio1.inputControl.hasAttribute('checked')).toBe(true);
    // expect(radio2.inputControl.hasAttribute('checked')).toBe(false);
  });

  it('should allow manually setting the radio name', async () => {
    element = await createTestElement(html`
      <cds-radio-group>
        <label>radio group</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" name="my-radio" value="1" checked />
        </cds-radio>
        <cds-radio>
          <label>radio 2</label>
          <input type="radio" name="my-radio" value="2" />
        </cds-radio>
        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>
    `);

    component = element.querySelector<CdsRadioGroup>('cds-radio-group');

    await componentIsStable(component);
    const radio1 = component.querySelectorAll('cds-radio')[0];
    const radio2 = component.querySelectorAll('cds-radio')[1];
    expect(radio1.inputControl.name).toBe(radio2.inputControl.name);
    expect(radio1.inputControl.name).toEqual('my-radio');
  });

  it('should sync radio-panel controls within a group', async () => {
    element = await createTestElement(html`
      <cds-radio-group>
        <label>radio group</label>
        <cds-radio-panel>
          <label>radio 1</label>
          <input type="radio" value="1" checked />
        </cds-radio-panel>
        <cds-radio-panel>
          <label>radio 2</label>
          <input type="radio" value="2" />
        </cds-radio-panel>
        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>
    `);

    component = element.querySelector<CdsRadioGroup>('cds-radio-group');

    await componentIsStable(component);
    const radio1 = component.querySelectorAll('cds-radio-panel')[0];
    const radio2 = component.querySelectorAll('cds-radio-panel')[1];
    expect(radio1.inputControl.hasAttribute('checked')).toBe(true);
    expect(radio2.inputControl.hasAttribute('checked')).toBe(false);
  });

  it('should allow manually setting the radio-panel input name', async () => {
    element = await createTestElement(html`
      <cds-radio-group>
        <label>radio group</label>
        <cds-radio-panel>
          <label>radio 1</label>
          <input type="radio" name="my-radio" value="1" checked />
        </cds-radio-panel>
        <cds-radio-panel>
          <label>radio 2</label>
          <input type="radio" name="my-radio" value="2" />
        </cds-radio-panel>
        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>
    `);

    component = element.querySelector<CdsRadioGroup>('cds-radio-group');

    await componentIsStable(component);
    const radio1 = component.querySelectorAll('cds-radio-panel')[0];
    const radio2 = component.querySelectorAll('cds-radio-panel')[1];
    expect(radio1.inputControl.name).toBe(radio2.inputControl.name);
    expect(radio1.inputControl.name).toEqual('my-radio');
  });
});
