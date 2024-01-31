import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPhotoComponent } from './main-photo.component';

describe('MainPhotoComponent', () => {
  let component: MainPhotoComponent;
  let fixture: ComponentFixture<MainPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPhotoComponent]
    });
    fixture = TestBed.createComponent(MainPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
