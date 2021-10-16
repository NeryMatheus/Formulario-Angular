import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    endereco: new FormControl('')
  })

  onSubmit(){
    console.log(this.myForm.value)
  }
}
