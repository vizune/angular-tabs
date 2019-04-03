import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { HomeComponent } from '../home/home.component';
import { ClientsComponent } from '../clients/clients.component';
import { ActionComponent } from '../actions/action.component';
import { JobsComponent } from '../jobs/jobs.component';
import { MeetingsComponent } from '../meetings/meetings.component';
import { HolidaysComponent } from '../holidays/holidays.component';
import { QuotesComponent } from '../quotes/quotes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
    { path: 'actions', component: ActionComponent, canActivate: [AuthGuard] },
    { path: 'jobs', component: JobsComponent },
    { path: 'meetings', component: MeetingsComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'quotes', component: QuotesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavRoutingModule {}
