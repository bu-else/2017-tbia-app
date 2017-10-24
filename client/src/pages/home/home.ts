import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "Symptom Survey",
      description: "The Injury<br/>Headache<br/>Memory<br/>Sleep<br/>Mood<br/>Pain<br/>",
    },
    {
      title: "Changing Sets",
      description: "The individual is shown a pattern. They are asked through a series of random questions to answer correctly as quickly as possible.",
    },
    {
      title: "Drawing 3D",
      description: "The individual would be asked to draw a 3D structure within a box on the screen as quickly as possible.",
    },
    {
      title: "Face Emotion Recognition",
      description: "Individuals would be shown three pictures and would be asked to select from a multiple choice list the emotion which was being expressed."
    }
  ];
}
