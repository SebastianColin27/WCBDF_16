import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirardadoComponent } from './tirardado.component';

describe('TirardadoComponent', () => {
  let component: TirardadoComponent;
  let fixture: ComponentFixture<TirardadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirardadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirardadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
