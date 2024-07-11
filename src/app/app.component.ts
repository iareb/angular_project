import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CardComponent} from "./card/card.component";
import {FooterComponent} from "./footer/footer.component";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {UserService} from "../services/user/user.service";
import {UserDto} from "../models/UserDto";
import {CourseService} from "../services/course/course.service";
import {CourseDto} from "../models/CourseDto";
import {UserLoginDto} from "../models/UserLoginDto";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, CardComponent,
    RegisterComponent, LoginComponent, FooterComponent, FormsModule, NgIf, NgForOf, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionale_corsi';

  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;

  userLoggedEmail: string = "Il tuo account";
  courses: CourseDto[];

  constructor(private userService: UserService, private courseService: CourseService, private router: Router) {
    this.courses = this.sendCourses();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
        this.isRegisterPage = this.router.url === '/register';

      }
    })
  }

  /*
  onSubmitForm($event: string): void {
    console.log($event);
    if ($event !== null) {
      //this.userLoggedEmail = $event;
      this.isLogged = true;
    }
  }
  */
  /*
    Prende le informazioni sui corsi dal backend, effettuando una chiamata GET.
    Poi, passa queste informazioni al componente card per costruire le bootstrap cards.
   */
  sendCourses(): CourseDto[] {
    this.courseService.getAll().subscribe(
     result => {
       this.courses = result as CourseDto[]
     });
    return this.courses;
  }

}
