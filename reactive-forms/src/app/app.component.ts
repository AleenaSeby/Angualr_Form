import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  // initialising the formgroup with object of controls that arte present in html 
  registrationForm = new FormGroup({
    username: new FormControl('aleena'), // default value
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postal_code: new FormControl('')
    })
  });
  // Form group and form control are building block of reactive forms
  // In reactive forms , a form is represented by a model in the component class
  // to create model we are using, form group and form control classes
  LoadApiData() {
    // setvalue method accepts an object that matches the structure of fromGroup with the control names with control names as keys
    // setvalue is very strict with maintaining the structure of the formGroup
    // setting value to few fields, use patchValue()

    this.registrationForm.setValue({
      username: 'Jlo',
      password: 'ccs',
      confirm_password: 'ccs',
      address: {
        city: 'city',
        state: 'state',
        postal_code: '680306'
      }
    });
  }

}
