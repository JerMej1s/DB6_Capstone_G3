import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CocktailsComponent } from './cocktails.component';

let component: CocktailsComponent;
let fixture: ComponentFixture<CocktailsComponent>;

describe('cocktails component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CocktailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CocktailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
