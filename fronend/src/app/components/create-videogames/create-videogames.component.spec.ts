import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideogamesComponent } from './create-videogames.component';

describe('CreateVideogamesComponent', () => {
  let component: CreateVideogamesComponent;
  let fixture: ComponentFixture<CreateVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVideogamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
