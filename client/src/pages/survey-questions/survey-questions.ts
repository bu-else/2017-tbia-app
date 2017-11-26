import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-survey-questions',
  templateUrl: 'survey-questions.html',
})
export class SurveyQuestionsPage {
  private survey;
  private index = 0;
  private userSelection;
  private userSelectionCount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('../assets/data/survey/survey.json').subscribe(res => {
      this.survey = res;
    })
  }

  currentQuestion() {
    return this.survey[this.index];
  }

  disableButton() {
    if (this.currentQuestion().single_choice) {
      return this.userSelection == null;
    } else if (this.currentQuestion().multiple_choices) {
      return this.userSelectionCount == 0;
    } else {
      return true;
    }
  }

  select(value) {
    this.userSelection = value;
  }

  updateSelection(value) {
    if (value.checked) {
      this.userSelectionCount += 1;
    } else {
      this.userSelectionCount -= 1;
    }
    console.log(this.userSelectionCount);
  }

  submit() {
    if (this.index < this.survey.length) {
      this.nextSlide(); 
      this.index++;
      this.cleanup();
    } else {
      // route to assessment
    }
  }

  cleanup() {
    this.userSelection = null;
    this.userSelectionCount = 0;
  }
  
  @ViewChild('slides') slides;
  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad SurveyQuestionsPage');
  }

}
