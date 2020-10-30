import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Message3Page } from './message3.page';

describe('Message3Page', () => {
  let component: Message3Page;
  let fixture: ComponentFixture<Message3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Message3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Message3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
