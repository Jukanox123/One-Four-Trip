import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilmvpPage } from './accueilmvp.page';

describe('AccueilmvpPage', () => {
  let component: AccueilmvpPage;
  let fixture: ComponentFixture<AccueilmvpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilmvpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilmvpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
