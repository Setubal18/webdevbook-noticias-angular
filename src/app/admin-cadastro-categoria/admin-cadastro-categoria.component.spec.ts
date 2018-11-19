import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroCategoriaComponent } from './admin-cadastro-categoria.component';

describe('AdminCadastroCategoriaComponent', () => {
  let component: AdminCadastroCategoriaComponent;
  let fixture: ComponentFixture<AdminCadastroCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastroCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastroCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
