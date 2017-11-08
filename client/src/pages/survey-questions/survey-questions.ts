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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('../assets/data/survey/survey.json').subscribe(res => {
      this.survey = res;
    })
  }

  submit() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  @ViewChild('slides') slides;
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad SurveyQuestionsPage');
  }

}
