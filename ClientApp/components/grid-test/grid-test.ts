import { Component } from '@angular/core';
import { WjFlexGrid, WjFlexGridColumn } from 'wijmo/wijmo.angular2.grid';

@Component({
    selector: 'grid-test',
    template: `<h1>Test Wijmo Grid</h1>
    <wj-flex-grid [itemsSource]="_data">
        <wj-flex-grid-column [header]="'Country Name'" [binding]="'country'"></wj-flex-grid-column>
        <wj-flex-grid-column [header]="'Payment Amount'" [binding]="'amount'"></wj-flex-grid-column>
    </wj-flex-grid>
    `,
    directives: [WjFlexGrid, WjFlexGridColumn]
})
export class GridTestComponent {
    _data: wijmo.collections.ObservableArray;

    constructor() {
        this._data = new wijmo.collections.ObservableArray;
        this._data.push({id: 1, country: 'US', amount: 500});
        this._data.push({id: 1, country: 'France', amount: 200});
        this._data.push({id: 1, country: 'Germany', amount: 1000});
    }
}