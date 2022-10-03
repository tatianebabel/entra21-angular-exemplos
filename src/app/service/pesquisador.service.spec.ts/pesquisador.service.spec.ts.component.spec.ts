import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorServiceSpecTsComponent } from './pesquisador.service.spec.ts.component';

describe('PesquisadorServiceSpecTsComponent', () => {
  let component: PesquisadorServiceSpecTsComponent;
  let fixture: ComponentFixture<PesquisadorServiceSpecTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisadorServiceSpecTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisadorServiceSpecTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
