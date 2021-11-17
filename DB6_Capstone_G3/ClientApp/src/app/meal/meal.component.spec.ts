
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MealComponent } from './meal.component';

let component: MealComponent;
let fixture: ComponentFixture<MealComponent>;

describe('meal component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MealComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MealComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
