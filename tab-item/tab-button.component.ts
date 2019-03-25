import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TabsComponent } from '../tabs.component';

@Component({
    selector: 'tab-button',
    template: ''
})

export class TabButtonComponent {
    @Input('buttonTitle') title: string;
    @Input('buttonIcon') icon: string;
    @Input('buttonPosition') position: string;
    @Input('buttonTransparent') transparent: boolean;
    @Input('buttonLink') link: any;
    @Input('buttonClick') clickEvt: string;

    constructor(buttons: TabsComponent, public router: Router) {
        buttons.addButton(this);
    }
}
