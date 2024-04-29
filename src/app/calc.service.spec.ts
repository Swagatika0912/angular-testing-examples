import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';


describe('CalcService', () => {
  let calc: CalcService,
  shared: SharedService;

  beforeEach(() => {
      console.log('Calling beforeEach');
      shared = jasmine.createSpyObj('SharedService',["mySharedFunction"]) // Call the spy
      TestBed.configureTestingModule({
        providers:[CalcService,SharedService]
       }); // Call the calculator
       shared = TestBed.inject(SharedService);
     calc = TestBed.inject(CalcService)
  });
  
  it('should multiply two numbers', () => {
  
    const result = calc.multiply(3,5)
    expect(result).toBe(15);
  });
  it('should add two numbers', () => {
    
    const result = calc.add(3,5)
    expect(result).toBe(8);
  });

});
