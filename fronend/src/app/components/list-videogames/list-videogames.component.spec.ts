import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideogamesComponent } from './list-videogames.component';

describe('ListVideogamesComponent', () => {
  let component: ListVideogamesComponent;
  let fixture: ComponentFixture<ListVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVideogamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
