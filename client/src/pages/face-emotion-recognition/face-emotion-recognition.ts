import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-face-emotion-recognition',
  templateUrl: 'face-emotion-recognition.html',
})
export class FaceEmotionRecognitionPage {
  private index = 0;
  private assessment: any[];
  private userSelection: any;
  private currentQuestionStartTime: any;
  private currentQuestionEndTime: any;
  private assessmentResults = [];

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
    this.assessment = this.generateQuestions(this.template, 6);
    this.currentQuestionStartTime = new Date();
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

  /**
   * Submission Behaviors
   */

  submit() {
    // log user response
    this.currentQuestionEndTime = new Date();
    let currentQuestion = this.assessment[this.index];
    this.assessmentResults.push({
      "question_id": currentQuestion.question_id,
      "question": currentQuestion.question,
      "response_standardized": currentQuestion.answers,
      "response_corroect": currentQuestion.correct_answer,
      "response_user_input": currentQuestion.answers[this.userSelection],
      "response_correctness": currentQuestion.correct_answer == this.userSelection,
      "start_time": this.currentQuestionStartTime,
      "end_time": this.currentQuestionEndTime
    });
    
    // next question
    if (this.index < this.assessment.length - 1) {
      this.index++;
      this.nextSlide();
      this.cleanup();
      this.currentQuestionStartTime = new Date();
    // next assessment
    } else {
      let response = {
        "title": "Assessments Results",
        "assessment": "Face Emotion Recognition",
        "properties": this.assessmentResults
      };
      console.log(response);
      this.navCtrl.push('ChangingSetsPage');
    }
  }

  cleanup() {
    this.userSelection = null;
    this.currentQuestionStartTime = null;
    this.currentQuestionEndTime = null;
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
