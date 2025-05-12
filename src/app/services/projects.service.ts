import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  image: string;
  github: string;
  live: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
  
}
