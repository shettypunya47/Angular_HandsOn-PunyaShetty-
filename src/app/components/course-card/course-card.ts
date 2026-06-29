import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
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

  // getter keeps the template clean — the template just binds [ngClass]="cardClasses"
  // instead of repeating the enrolled/full/expanded conditions inline in the HTML.
  // If the rules ever change (e.g. credits threshold), there's one place to update,
  // and the template stays readable instead of turning into a wall of conditions.
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
      'border-left': `4px solid ${colors[this.course?.gradeStatus] ?? 'grey'}`
    };
  }
}