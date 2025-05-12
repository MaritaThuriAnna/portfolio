import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '../../services/projects.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['All', 'Web Application', 'Angular'];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.filteredProjects = data;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }

  filterProjects(category: string): void {
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
  }
}
