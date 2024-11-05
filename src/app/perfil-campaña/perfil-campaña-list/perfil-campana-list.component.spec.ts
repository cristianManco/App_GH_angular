import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCampanaListComponent } from './perfil-campana-list.component';

describe('PerfilCampanaListComponent', () => {
  let component: PerfilCampanaListComponent;
  let fixture: ComponentFixture<PerfilCampanaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCampanaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCampanaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
