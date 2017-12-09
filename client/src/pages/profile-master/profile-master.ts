import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-master',
  templateUrl: 'profile-master.html',
})
export class ProfileMasterPage {
  private profile: any[] = [
    {
      header: 'General',
      items: [
        { title: 'Name', value: 'First M. Last' },
        { title: 'Age', value: '19' },
        { title: 'Gender', value: 'Female' }
      ]
    },
    {
      header: 'Current Head Injury',
      items: [
        { title: 'Time', value: '10-20-2017 5:00PM' },
        { title: 'Medical Problems', value: 'IE migraines' }
      ]
    },
    {
      header: 'Prior Head Injuries',
      items: [
        { title: 'Time', value: '10-20-2017 5:00PM' },
        { title: 'Medical Problems', value: 'sleep difficulties' }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileMasterPage');
  }

}
