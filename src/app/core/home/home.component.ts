import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name_: string ;
  lastname_: string;
  email_:string;
  age_: string;
  city_:string;

  send:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveForm(form: NgForm) {

    if (form.form.status === 'INVALID') {
      return
    }
    this.name_ = form.form.value.name;
    this.lastname_ = form.form.value.lastname;
    this.email_ = form.form.value.email;
    this.age_ = form.form.value.age;
    this.city_ = form.form.value.city;

    this.send = true;
  }

}
