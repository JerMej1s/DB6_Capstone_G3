import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MealstestComponent } from './mealstest.component';

let component: MealstestComponent;
let fixture: ComponentFixture<MealstestComponent>;

describe('mealstest component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MealstestComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MealstestComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
