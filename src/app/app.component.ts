import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription:string = 'advanced'
  @ViewChild('form') formData: NgForm;
  data = {
    email:'', password:'', subscriptionType:''
  }

  submitted:boolean = false;

  onSubmit(){
    this.data.email = this.formData.value.email;
    this.data.password = this.formData.value.password;
    this.data.subscriptionType = this.formData.value.subscriptionType;
    console.log(this.data);
    
    this.submitted =true;

    this.formData.reset();
    
  }

}
