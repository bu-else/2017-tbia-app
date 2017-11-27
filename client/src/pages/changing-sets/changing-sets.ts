import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-changing-sets',
  templateUrl: 'changing-sets.html',
})
export class ChangingSetsPage {
  private assessment;
  private assessmentStartTime;
  private questionStartTime;
  private questionCount = 5;

  private pattern = {
    "question": "Choose ",
    "answers": [
      {
        "answer_id": 1,
        "answer": "Red",
        "answer_num": 1,
        "answer_color": "danger"
      },
      {
        "answer_id": 2,
        "answer": "Blue",
        "answer_num": 2,
        "answer_color": "primary"
      }
    ]
  };
  private new_pattern = {
    "question": "Choose ",
    "answers": [
      {
        "answer_id": 1,
        "answer": "Red",
        "answer_num": 2,
        "answer_color": "danger"
      },
      {
        "answer_id": 2,
        "answer": "Blue",
        "answer_num": 1,
        "answer_color": "primary"
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessment = this.generateQuestions(this.pattern, this.new_pattern, this.questionCount);
    this.assessmentStartTime = new Date();
    this.questionStartTime = this.assessmentStartTime;
    console.log(this.assessmentStartTime.toString());
  }

  generateQuestions(pattern, new_pattern, count) {
    let questions = [];

    questions.push({"message": true, "text": "Red = 1, Blue = 2", "red": 1, "blue": 2});
    for (var i = 1; i <= count; i++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": i,
        "question": pattern.question + randq.toString(),
        "answers": [pattern.answers[randa], pattern.answers[(randa + 1) % 2]],
        "correct_answer": pattern.answers[randq - 1]
      });
    }

    questions.push({"message": true, "text": "Red = 2, Blue = 1", "red": 2, "blue": 1});
    for (var i = 1; i <= count; i++) {
      let randq = Math.floor(Math.random() * 2) + 1;
      let randa = Math.floor(Math.random() * 2);
      questions.push({
        "question_id": i + count,
        "question": new_pattern.question + randq.toString(),
        "answers": [new_pattern.answers[randa], new_pattern.answers[(randa + 1) % 2]],
        "correct_answer": new_pattern.answers[randq - 1]
      });
    }
    return questions;
  }

  submit() {
    let moment = require('moment');
    let end = moment(new Date(), "YYYYMMDD HH: mm: ss");
    let start = moment(this.assessmentStartTime, "YYYYMMDD HH:mm:ss");
    let timeElapsed = end.diff(start, 'seconds');

    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.questionStartTime = new Date(); 
  }

  @ViewChild('slides') slides;
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad ChangingSetsPage');
  }

}
