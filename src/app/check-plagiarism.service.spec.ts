import { TestBed } from '@angular/core/testing';

import { CheckPlagiarismService } from './check-plagiarism.service';

describe('CheckPlagiarismService', () => {
  let service: CheckPlagiarismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPlagiarismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
