import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  @Output() cancel = new EventEmitter<void>();

  enteredTitle = signal(''); //signal will work as it is, no change needed in template file
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.cancel.emit();
  }

}
