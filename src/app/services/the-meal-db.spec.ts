import { TestBed } from '@angular/core/testing';

import { TheMealDb } from './the-meal-db';

describe('TheMealDb', () => {
  let service: TheMealDb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMealDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
