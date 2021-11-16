/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EventconfirmationComponent } from './eventconfirmation.component';

let component: EventconfirmationComponent;
let fixture: ComponentFixture<EventconfirmationComponent>;

describe('eventconfirmation component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EventconfirmationComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EventconfirmationComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});