import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCard, CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    {
      name: 'Angular',
      instructor: 'John'
    },
    {
      name: 'Java',
      instructor: 'Smith'
    },
    {
      name: 'Python',
      instructor: 'David'
    }
  ];
}