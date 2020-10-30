import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Message2Page } from './message2.page';

describe('Message2Page', () => {
  let component: Message2Page;
  let fixture: ComponentFixture<Message2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Message2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Message2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
