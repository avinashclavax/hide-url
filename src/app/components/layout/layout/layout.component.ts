import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        console.log("layout component")
        this.navidateNAlterUrl()
    }

    navidateNAlterUrl() {
        // console.log("from check rout")
        // console.log(this.route.snapshot['_routerState'])
        
        var urlWillBe = this.route.snapshot['_routerState'].url
        // console.log(urlWillBe)
        
        history.replaceState('', '', '/')
        this.router.navigate([urlWillBe], { skipLocationChange: true });

        // console.log("get route path")
        // console.log(this.route.snapshot.routeConfig.path)
    }
}
