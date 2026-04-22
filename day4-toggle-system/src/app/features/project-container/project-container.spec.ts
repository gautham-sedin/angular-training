import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainer } from './project-container';

describe('ProjectContainer', () => {
  let component: ProjectContainer;
  let fixture: ComponentFixture<ProjectContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
