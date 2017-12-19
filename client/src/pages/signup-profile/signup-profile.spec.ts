import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { SignupProfilePage } from './signup-profile';
import { Api, User } from '../../providers/providers';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Page: Sign Up (Profile)', () => {
  let component: SignupProfilePage;
  let fixture: ComponentFixture<SignupProfilePage>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, SignupProfilePage],
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
    fixture = TestBed.createComponent(SignupProfilePage);
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
  
  describe('Profile Form', () => {
    it('should contain a profile form', () => {
      expect(component.signupProfileForm).toBeTruthy();
    })
    
<<<<<<< HEAD
    it('should contain age and gender fields', () => {
=======
    it('should contain name, age and gender fields', () => {
      expect(component.signupProfileForm.value.name).toBeDefined();
>>>>>>> Create a test file for signup-profile; update the page (#65)
      expect(component.signupProfileForm.value.age).toBeDefined();
      expect(component.signupProfileForm.value.gender).toBeDefined();
    })
    
    it('should contain date and medical problems of current and past injuries', () => {
      expect(component.signupProfileForm.value.currentInjuryDate).toBeDefined();
      expect(component.signupProfileForm.value.currentInjuryMedicalProblems).toBeDefined();
      expect(component.signupProfileForm.value.priorInjuryDate).toBeDefined();
      expect(component.signupProfileForm.value.priorInjuryMedicalProblems).toBeDefined();
    })
  });
})