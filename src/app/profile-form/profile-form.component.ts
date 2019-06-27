import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  genders = ['male', 'female'];

  userModel = new Profile('Anoop', 'anoop.anthony@gmail.com','male',6475805318, 'Toronto');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.userModel); }

}
