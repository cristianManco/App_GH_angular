import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCargoFormComponent } from './perfil-cargo-form.component';

describe('PerfilCargoFormComponent', () => {
  let component: PerfilCargoFormComponent;
  let fixture: ComponentFixture<PerfilCargoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCargoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCargoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
