import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})

export class StarComponent implements OnChanges {

    @Input() 
    star: number = 0;

    starWidth: number = 0;

    ngOnChanges(): void {
            this.starWidth = this.star * 74 / 5;
    }
    
}