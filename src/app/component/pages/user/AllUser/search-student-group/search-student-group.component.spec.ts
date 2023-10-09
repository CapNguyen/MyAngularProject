import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentGroupComponent } from './search-student-group.component';

describe('SearchStudentGroupComponent', () => {
  let component: SearchStudentGroupComponent;
  let fixture: ComponentFixture<SearchStudentGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStudentGroupComponent]
    });
    fixture = TestBed.createComponent(SearchStudentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
