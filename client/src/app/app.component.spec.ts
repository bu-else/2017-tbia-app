import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../test-config/mocks-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

describe('MyApp', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  });

  describe('RootPage', () => {
    it('should be welcome page', () => {
      expect(component.rootPage).toBe('WelcomePage');
    })
  })

  describe('Menu', () => {
    describe('Profile', () => {
      it('should contain a profile option', () => {
        expect(component.pages[0].title).toBe('Profile');
      });

      it('should redirect to profile', () => {
        expect(component.pages[0].component).toBe('ProfileMasterPage');
      });
    })

    describe('Logout', () => {
      it('should contain a logout option', () => {
        expect(component.pages[1].title).toBe('Log Out');
      });

      it('should redirect to logout', () => {
        expect(component.pages[1].component).toBe('LogoutPage');
      })
    })
  })
})