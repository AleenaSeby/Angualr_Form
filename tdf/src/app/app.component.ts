import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;
  errorMsg: any;
  constructor(private _enrollmentservice: EnrollmentService) { }
  //instance of model
  userModel = new User("", "aleena@gmail.com", 9544331841, "default", "morning");
  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
  onSubmit(regForm) {
    console.log(regForm);
    this.submitted = true;
    console.log(this.userModel);
    // We subscribe to the http response
    // this._enrollmentservice.enroll(this.userModel)
    //   .subscribe(
    //     data => console.log("Success!!", data),
    //     error => this.errorMsg = error.statusText
    //     // console.log("Error!!", error)
    //   )
  }
}
