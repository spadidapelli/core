/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService, toggleRange } from '@cds/core/demo';
import '@cds/core/checkbox/register.js';
import '@cds/core/grid/register.js';

export function rowMultiSelect() {
  @customElement('demo-grid-row-multi-select')
  class DemoRowMultiSelect extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private shiftKey = false;
    private previousSelected: DemoGridRow;

    get selected() {
      return this.grid.rows.filter(i => i.selected).length;
    }

    render() {
      return html`
        <cds-grid
          aria-label="row multi select datagrid demo"
          selectable="multi"
          height="360"
          @keydown=${(e: any) => (this.shiftKey = e.shiftKey)}
          @keyup=${(e: any) => (this.shiftKey = e.shiftKey)}
        >
          <cds-grid-column type="action">
            <cds-checkbox>
              <input
                type="checkbox"
                .checked=${this.selected === this.grid.rows.length}
                .indeterminate=${this.selected > 0 && this.selected < this.grid.rows.length}
                @change=${(e: any) => this.selectAll(e.target.checked)}
                aria-label="select all hosts"
              />
            </cds-checkbox>
          </cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(
            row => html`<cds-grid-row .selected=${row.selected as boolean}>
              <cds-grid-cell>
                <cds-checkbox>
                  <input
                    type="checkbox"
                    .checked=${row.selected as boolean}
                    value=${row.id}
                    @change=${(e: any) => this.select(row, e)}
                    aria-label="select ${row.id}"
                  />
                </cds-checkbox>
              </cds-grid-cell>
              ${row.cells.map(cell => html` <cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer>${this.selected} selected</cds-grid-footer>
        </cds-grid>
      `;
    }

    private select(row: DemoGridRow, e: any) {
      this.grid.rows.find(i => i.id === row.id).selected = e.target.checked;
      this.selectRange(row);
      this.grid = { ...this.grid };
    }

    private selectAll(selected: boolean) {
      this.grid.rows.forEach(i => (i.selected = selected));
      this.grid = { ...this.grid };
    }

    private selectRange(row: DemoGridRow) {
      const selectedRow = this.grid.rows.find(i => i.id === row.id);
      if (this.previousSelected && this.shiftKey) {
        toggleRange(
          this.grid.rows,
          this.grid.rows.indexOf(this.grid.rows.find(i => i.id === row.id)),
          this.grid.rows.indexOf(this.previousSelected)
        );
      }
      this.previousSelected = selectedRow;
    }
  }
  return html`<demo-grid-row-multi-select></demo-grid-row-multi-select>`;
}
