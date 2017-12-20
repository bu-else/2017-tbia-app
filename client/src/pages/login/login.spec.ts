import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { LoginPage } from './login';
import { Api, User, EnvironmentProvider } from '../../providers/providers';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Page: Login', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, LoginPage],
      providers: [
        NavController,
        Api,
        User,
        EnvironmentProvider,
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
  });

  it('should be created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  describe('Login Form', () => {
    it('should contain a login form', () => {
      expect(component.loginForm).toBeTruthy();
    })

    it('should contain username and password fields', () => {
      expect(component.loginForm.value.username).toBeDefined();
      expect(component.loginForm.value.password).toBeDefined();
    })
  });
})