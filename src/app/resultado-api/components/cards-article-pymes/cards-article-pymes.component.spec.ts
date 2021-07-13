import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsArticlePymesComponent } from './cards-article-pymes.component';

describe('CardsArticlePymesComponent', () => {
  let component: CardsArticlePymesComponent;
  let fixture: ComponentFixture<CardsArticlePymesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsArticlePymesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsArticlePymesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
