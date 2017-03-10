import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Courses } from '../courses/courses.module'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
      this.navCtrl = navCtrl;
    }

  goToCourses() {
      this.navCtrl.push(Courses);
  }
}