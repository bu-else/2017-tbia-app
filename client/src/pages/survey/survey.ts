import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  private index = 0;
  private survey;
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

  disableNextButton() {
    if (this.currentQuestion().single_choice || this.currentQuestion().range) {
      return this.userSelection == null;
    } else if (this.currentQuestion().multiple_choices) {
      return this.userSelectionCount == 0;
    }
  }

  select(value) {
    this.userSelection = value;
  }

  updateSelectionCount(value) {
    if (value.checked) {
      this.userSelectionCount += 1;
    } else {
      this.userSelectionCount -= 1;
    }
  }

  updateRange(value) {
    this.userSelection = value.value;
  }

  submit() {
    if (this.index < this.survey.length - 1) {
      this.nextSlide(); 
      this.index++;
      this.cleanup();
    } else {
      this.navCtrl.push('FaceEmotionRecognitionPage');
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
    console.log('ionViewDidLoad SurveyPage');
  }

}
