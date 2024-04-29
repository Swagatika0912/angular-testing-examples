import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mockData/users';

describe('DataService', () => {
  let service: DataService;
  let testingcontroller:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingcontroller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all users ',()=>{
service.getAllUsers().subscribe((users:any)=>{
  expect(users).toBeTruthy();
  expect(users.length).toBe(3);
  const SecondUsers = users.find((user:any)=>{user.id == 2}) ;
  expect( SecondUsers.firstName).toBe('Swaga');
  const mockReq = testingcontroller.expectOne('api/users');
  expect(mockReq.request.method).toEqual('GET');
  mockReq.flush(Object.values(USERS))
})
  })
});
