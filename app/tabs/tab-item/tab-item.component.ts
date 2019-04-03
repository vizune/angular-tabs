import { Component, Input } from '@angular/core';

import { TabsComponent } from '../tabs.component';

@Component({
    selector: 'tab-item',
    templateUrl: './tab-item.component.html'
})

export class TabItemComponent {
    @Input('tabTitle') title: string;
    @Input('tabClick') click: string;
    @Input('tabLink') link: any;
    @Input() active = false;

    constructor(tabs: TabsComponent) {
        tabs.addTab(this);
    }
}
