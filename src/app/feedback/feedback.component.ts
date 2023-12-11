import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup = new FormGroup({}); // Initialize at the declaration

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      // Send feedback to Google Sheets or perform other actions
      console.log(this.feedbackForm.value);
    }
  }
}
