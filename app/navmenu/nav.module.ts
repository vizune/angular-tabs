import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { TooltipModule } from '../tooltip/tooltip.module';

import { NavMenuComponent } from './navmenu.component';
import { NavExpandComponent } from './nav-expand/nav-expand.component';

@NgModule({
    declarations: [
        NavMenuComponent,
        NavExpandComponent
    ],
    imports: [
        CommonModule,
        NavRoutingModule,
        TooltipModule
    ],
    exports: [
        NavMenuComponent,
        NavExpandComponent
    ]
})
export class NavModule {
}
