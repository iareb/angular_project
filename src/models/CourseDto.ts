export class CourseDto {

  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: number;

  constructor(id: number, name: string, shortDescription: string, fullDescription: string, duration: number) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.duration = duration;
  }

}
