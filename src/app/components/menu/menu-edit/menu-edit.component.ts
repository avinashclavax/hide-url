import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu-edit',
    templateUrl: './menu-edit.component.html',
    styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log("get route id from menu edit")
        console.log(this.route.snapshot.paramMap.get('id'))
    }

}
