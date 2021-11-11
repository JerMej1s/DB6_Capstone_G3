import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MealsComponent } from './meals.component';

let component: MealsComponent;
let fixture: ComponentFixture<MealsComponent>;

describe('meals component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MealsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MealsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
