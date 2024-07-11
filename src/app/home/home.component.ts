import {Component, Input} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import {CourseDto} from "../../models/CourseDto";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input('courses')
  courses: CourseDto[];
}
