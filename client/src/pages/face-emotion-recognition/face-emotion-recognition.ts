import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-face-emotion-recognition',
  templateUrl: 'face-emotion-recognition.html',
})
export class FaceEmotionRecognitionPage {
  private index = 0;
  private assessment;
  private userSelection;
  private questionCount = 5;
<<<<<<< Updated upstream
=======
  private assessmentStartTime;
  private questionStartTime;
  private assessmentResults = [];
>>>>>>> Stashed changes

  private template = {
    "question": "What emotion is featured here?",
    "answers": [
      {
        "answer_id": 1,
        "answer_img": "assets/data/face-emotion-recognition/happy.jpg",
        "answer": "Happy"
      },
      {
        "answer_id": 2,
        "answer_img": "assets/data/face-emotion-recognition/sad.jpg",
        "answer": "Sad"
      },
      {
        "answer_id": 3,
        "answer_img": "assets/data/face-emotion-recognition/thoughtful.jpg",
        "answer": "Thoughtful"
      },
      {
        "answer_id": 4,
        "answer_img": "assets/data/face-emotion-recognition/angry.jpg",
        "answer": "Angry"
      },
      {
        "answer_id": 5,
        "answer_img": "assets/data/face-emotion-recognition/confused.jpg",
        "answer": "Confused"
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessment = this.generateQuestions(this.template, this.questionCount);
  }

  generateQuestions(template, count) {
    let questions = [];

    for (var i = 1; i <= count; i++) {
      let randint = Math.floor(Math.random() * 5);
      questions.push({
        "question_id": i,
        "question": template.question,
        "question_img": template.answers[randint].answer_img,
        "answers": template.answers,
        "correct_answer": template.answers[randint]
      });
    }
    return questions;
  }

  disableNextButton() {
    return this.userSelection == null;
  }

  select(value) {
    this.userSelection = value;
  }

  submit() {
    if (this. index < this.assessment.length - 1) {
<<<<<<< Updated upstream
=======
      let moment = require('moment');
      let end = moment(new Date(), "YYYYMMDD HH: mm: ss");
      let start = moment(this.questionStartTime, "YYYYMMDD HH:mm:ss");
      let timeElapsed = end.diff(start, 'seconds');

>>>>>>> Stashed changes
      this.nextSlide();
      this.index++;
      this.cleanup();
    } else {
      this.navCtrl.push('ChangingSetsPage');
    }
  }

  cleanup() {
    this.userSelection = null;
  }

  @ViewChild('slides') slides;
  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad FaceEmotionRecognitionPage');
  }

}
