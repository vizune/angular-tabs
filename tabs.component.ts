import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { TabItemComponent } from './tab-item/tab-item.component';
import { TabButtonComponent } from './tab-item/tab-button.component';

@Component({
    selector: 'tab-nav',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent {
    @Input('heading') heading: string;
    @Input() state: boolean;
    @Input() subHeading: boolean;

    @Output() status: EventEmitter<string> = new EventEmitter<string>();
    @Output() clickToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    tabs: TabItemComponent[] = [];
    buttons: TabButtonComponent[] = [];

    constructor(public router: Router) { }

    addTab(tab: TabItemComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    addButton(button: TabButtonComponent) {
        this.buttons.push(button);
    }

    buttonClick() {
        // Provides a boolean click event on tab button for parent components e.g. modal trigger
        this.state = !this.state;
        this.clickToggle.emit(this.state);
    }

    buttonLink(link) {
        //this.router.navigateByUrl(link);
        this.router.navigate(link);
    }

    selectTab(tab: TabItemComponent) {
        // Provides alternative to content within "tab-item", used to emits status to parent commonly used to load component
        if (tab.click) {
            this.status.emit(tab.click);
        }
        if (tab.link) {
            this.router.navigate(tab.link);
        }

        this.tabs.forEach(tab => tab.active = false);
        tab.active = true;
    }

}
