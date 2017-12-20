import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { SignupPage } from './signup';
import { Api, User } from '../../providers/providers';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Page: Sign Up', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, SignupPage],
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
    fixture = TestBed.createComponent(SignupPage);
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
  
  describe('Signup Form', () => {
    it('should contain a signup form', () => {
      expect(component.signupForm).toBeTruthy();
    })

    it('should contain name, username, email, password and confirm password fields', () => {
      expect(component.signupForm.value.name).toBeDefined();
      expect(component.signupForm.value.username).toBeDefined();
      expect(component.signupForm.value.email).toBeDefined();
      expect(component.signupForm.value.password).toBeDefined();
      expect(component.signupForm.value.confirmPassword).toBeDefined();
    })
  });
})