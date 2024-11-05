import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCargoListComponent } from './perfil-cargo-list.component';

describe('PerfilCargoListComponent', () => {
  let component: PerfilCargoListComponent;
  let fixture: ComponentFixture<PerfilCargoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCargoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCargoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
