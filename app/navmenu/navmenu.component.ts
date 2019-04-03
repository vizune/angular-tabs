import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Page, NavService } from '../services/nav.service';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.scss'],
})
export class NavMenuComponent implements OnInit {
    sidenav$: Observable<Page[]>;
    expanded: boolean = false;

    constructor(
        public loginService: LoginService,
        private service: NavService,
        public router: Router,
        public nav: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.loginService.checkLogin()
            .subscribe(u => {
                if (this.loginService.redirectUrl) {
                    let url = this.loginService.redirectUrl;
                    this.loginService.redirectUrl = null;
                    this.router.navigate([url]);
                }
            });

        this.sidenav$ = this.nav.paramMap
            .switchMap((params: ParamMap) => {
                return this.service.getPages();
            });
    }

    expandStatus(status) {
        this.expanded = status;
    }

}
