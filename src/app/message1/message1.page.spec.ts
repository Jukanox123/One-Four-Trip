import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Message1Page } from './message1.page';

describe('Message1Page', () => {
  let component: Message1Page;
  let fixture: ComponentFixture<Message1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Message1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Message1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
