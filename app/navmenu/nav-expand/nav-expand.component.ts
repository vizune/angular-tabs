import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-expand',
    templateUrl: './nav-expand.component.html',
    styleUrls: ['./nav-expand.component.scss']
})

export class NavExpandComponent {
    expanded: boolean = false;

    @Output() expandNav: EventEmitter<any> = new EventEmitter();

    expand() {
        this.expanded = !this.expanded;
        this.expandNav.emit(this.expanded);
    }
}
