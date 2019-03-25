import { Pipe, PipeTransform } from '@angular/core';

import { TabButtonComponent } from './tab-button.component';

@Pipe({ name: 'buttonPosition' })
export class ButtonPositionPipe implements PipeTransform {
    transform(buttons: TabButtonComponent[], position: string) {
        return buttons.filter(button => {
            return button.position.includes(position);
        });
    }
}
