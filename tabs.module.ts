import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../tooltip/tooltip.module';

import { ButtonPositionPipe } from './tab-item/tab-position.pipe';

import { TabsComponent } from './tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabButtonComponent } from './tab-item/tab-button.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TooltipModule
    ],
    exports: [
        TabsComponent,
        TabItemComponent,
        TabButtonComponent
    ],
    declarations: [
        TabsComponent,
        TabItemComponent,
        TabButtonComponent,
        ButtonPositionPipe
    ],
    providers: []
})
export class TabsModule {
}
