/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { LogintestComponent } from './logintest.component';

let component: LogintestComponent;
let fixture: ComponentFixture<LogintestComponent>;

describe('logintest component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LogintestComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(LogintestComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});