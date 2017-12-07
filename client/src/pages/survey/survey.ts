import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Api } from '../../providers/providers';

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
  private questionStartTime;
  private assessmentResults = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public api: Api) {
    this.api.get('surveys').subscribe(res => {
      this.survey = res["assessments"][0]["questions"];
    }, err => {
      console.log(err);
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
      let moment = require('moment');
      let end = moment(new Date(), "YYYYMMDD HH: mm: ss");
      let start = moment(this.questionStartTime, "YYYYMMDD HH:mm:ss");
      let timeElapsed = end.diff(start, 'seconds');

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
