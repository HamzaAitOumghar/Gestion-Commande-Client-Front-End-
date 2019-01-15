import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCommandeComponent } from './supprimer-commande.component';

describe('SupprimerCommandeComponent', () => {
  let component: SupprimerCommandeComponent;
  let fixture: ComponentFixture<SupprimerCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
