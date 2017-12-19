import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { LoginPage } from './login';
import { Api, User } from '../../providers/providers';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Page:', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, LoginPage],
      providers: [
        NavController,
        Api,
        User,
        HttpClient,
        HttpHandler
      ],
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });

  it('should be created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  describe('Login Form', () => {
    it('should contain a login form', () => {
      expect(component.loginForm).toBeTruthy();
    })

    it('should contain a username field', () => {
      expect(component.loginForm.value.username).toBeDefined();
    })

    it('should contain a passwrod field', () => {
      expect(component.loginForm.value.password).toBeDefined();
    })
  });
})