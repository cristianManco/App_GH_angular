import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCampanaFormComponent } from './perfil-campana-form.component';

describe('PerfilCampanaFormComponent', () => {
  let component: PerfilCampanaFormComponent;
  let fixture: ComponentFixture<PerfilCampanaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCampanaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCampanaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
