import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CourseDto} from "../../models/CourseDto";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  courseRegistration(newCourse: CourseDto): Observable<CourseDto> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<CourseDto>('http://localhost:8080/api/course/registration', JSON.stringify(newCourse), {headers: header})
      .pipe(
        retry(3),
        catchError(this.handleError)
    );
  }

  getCourseById(id: number): Observable<CourseDto> {
    return this.http.get<CourseDto>('http://localhost:8080/api/course/' + id).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>('http://localhost:8080/api/course/all').pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  updateCourse(id: number, course: CourseDto): Observable<CourseDto> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<CourseDto>('http://localhost:8080/api/courses/update/'+id, course, {headers: header})
      .pipe(
          retry(3),
          catchError(this.handleError)
      )
  }

  deleteCourse(id: number): Observable<CourseDto> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<CourseDto>('http://localhost:8080/api/courses/delete/'+id).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
