import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendQuestionListComponent } from './send-question-list.component';

describe('SendQuestionListComponent', () => {
  let component: SendQuestionListComponent;
  let fixture: ComponentFixture<SendQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
