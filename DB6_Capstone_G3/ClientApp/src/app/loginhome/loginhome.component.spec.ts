/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { LoginhomeComponent } from './loginhome.component';

let component: LoginhomeComponent;
let fixture: ComponentFixture<LoginhomeComponent>;

describe('loginhome component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginhomeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(LoginhomeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});