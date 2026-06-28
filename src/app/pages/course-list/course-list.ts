import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId?: number;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      instructor: 'John'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      instructor: 'Smith'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 4,
      instructor: 'David'
    },
    {
      id: 4,
      name: 'DBMS',
      code: 'DB401',
      credits: 3,
      instructor: 'Ravi'
    },
    {
      id: 5,
      name: 'OS',
      code: 'OS501',
      credits: 4,
      instructor: 'Kumar'
    }
  ];

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }
}