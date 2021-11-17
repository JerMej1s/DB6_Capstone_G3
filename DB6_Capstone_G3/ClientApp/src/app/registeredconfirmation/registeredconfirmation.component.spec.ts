
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RegisteredconfirmationComponent } from './registeredconfirmation.component';

let component: RegisteredconfirmationComponent;
let fixture: ComponentFixture<RegisteredconfirmationComponent>;

describe('registeredconfirmation component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RegisteredconfirmationComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RegisteredconfirmationComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
