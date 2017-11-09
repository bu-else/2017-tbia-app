import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-assessment-face-emotion-recognition',
  templateUrl: 'assessment-face-emotion-recognition.html',
})
export class AssessmentFaceEmotionRecognitionPage {
  private assessment;
  private count = 5;
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
<<<<<<< HEAD
<<<<<<< HEAD
        "answer": "Confused"
=======
        "ansewr": "Confused"
>>>>>>> Create an assessment page for face emotion recognition (#18) (still need
=======
        "answer": "Confused"
>>>>>>> Fix a typo in assessment template (#18)
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessment = this.generateQuestions(this.template, this.count);
  }

  generateQuestions(template, count) {
    let questions = [];

    for (var i = 1; i <= count; i++) {
      let randint = Math.floor(Math.random() * 5);
      console.log(template.answers);
      questions.push({
        "question_id": i,
        "question": template.question,
        "question_img": template.answers[randint].answer_img,
        "answers": template.answers,
        "correct_answer": template.answers[randint]
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(questions);
>>>>>>> Create an assessment page for face emotion recognition (#18) (still need
=======
>>>>>>> Fix a typo in assessment template (#18)
    return questions;
  }

  submit() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  @ViewChild('slides') slides;
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad AssessmentFaceEmotionRecognitionPage');
  }

}
