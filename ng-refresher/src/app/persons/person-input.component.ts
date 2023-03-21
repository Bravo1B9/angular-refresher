import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  @Output() personAdd = new EventEmitter<string>()
  enteredPersonName: string = '';

  onAddPerson() {
    console.log(`Adding person ${this.enteredPersonName}`);
    this.personAdd.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}