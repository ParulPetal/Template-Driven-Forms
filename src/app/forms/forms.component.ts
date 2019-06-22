import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

sports=['Tracking','Boating','Bannana-jump',"Para-sailing"];
topicHasError = true;


userModel= new User("","", 7981292014,"default","",false);
  sportsHasError: boolean;
  

ngOnInit() {
  console.log(this.userModel); 
}


validateSports(value: string) {
  if (value === 'default') {
    this.sportsHasError = true;
  } else {
    this.sportsHasError = false;
  }
}



onSubmit(){

  console.log(this.userModel);
 
}
}


