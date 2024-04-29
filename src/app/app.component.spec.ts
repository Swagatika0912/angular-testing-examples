import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

//ignore
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture:  ComponentFixture<AppComponent>;
  let el :DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance; 
      el = fixture.debugElement
    })
  });


  it('should render a button with text subscribe',()=>{
    const buttonElements = el.queryAll(By.css('.subscribe'))
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing-examples'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-examples');
  });

  
});
