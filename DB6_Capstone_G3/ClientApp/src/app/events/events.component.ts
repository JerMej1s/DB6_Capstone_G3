import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
})
/** events component*/
export class EventsComponent {



    /** events ctor */
    constructor(private http: HttpClient) {

    }
}
