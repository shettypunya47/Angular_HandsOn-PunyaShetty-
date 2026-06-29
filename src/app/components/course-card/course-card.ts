import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  isEnrolled = false;

  isExpanded = false;

  enroll() {
    this.isEnrolled = true;
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // getter for [ngStyle]: left border colour reflects gradeStatus
  get borderStyle() {
    const colors: Record<string, string> = {
      passed: 'green',
      failed: 'red',
      pending: 'grey'
    };

    return {
      'border-left':
        `4px solid ${colors[this.course?.gradeStatus] ?? 'grey'}`
    };
  }
}