import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = signal(true);

  selectedCourseId?: number;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      instructor: 'John',
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      instructor: 'Smith',
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 4,
      instructor: 'David',
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'DBMS',
      code: 'DB401',
      credits: 3,
      instructor: 'Ravi',
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'OS',
      code: 'OS501',
      credits: 4,
      instructor: 'Kumar',
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    console.log('CourseList initialized');

    setTimeout(() => {
      console.log('Setting loading false');
      this.isLoading.set(false);
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by re-rendering only changed items
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}