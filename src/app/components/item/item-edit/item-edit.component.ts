import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.scss']
})

export class ItemEditComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log("get route id from item edit")
        console.log(this.route.snapshot.paramMap.get('id'))
    }

}
