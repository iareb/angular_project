import {Component, Input, Output} from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {CourseInfo} from "../../models/courseInfo";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CourseDto} from "../../models/CourseDto";
import {CourseService} from "../../services/course/course.service";
import {lastValueFrom, observable, Subject} from "rxjs";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  searchQuery: string = "";

  @Input('buyCount')
  buyCount: number;

  @Input('course')
  course: CourseDto;

  images: string[] = [
    "course#1", "course#2", "course#3", "course#4", "course#5", "course#6"
  ];

  constructor(private courseService: CourseService) {}

  @Output()
  onUpdate(event: Event) {
    this.searchQuery = (<HTMLInputElement>event.target).value;
    console.log(this.searchQuery);
  }

  incrementCartCount(): void {
    this.buyCount++;
  }
}
