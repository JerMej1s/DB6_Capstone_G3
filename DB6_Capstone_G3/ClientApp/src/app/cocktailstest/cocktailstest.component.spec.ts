import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CocktailstestComponent } from './cocktailstest.component';

let component: CocktailstestComponent;
let fixture: ComponentFixture<CocktailstestComponent>;

describe('cocktailstest component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CocktailstestComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CocktailstestComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
