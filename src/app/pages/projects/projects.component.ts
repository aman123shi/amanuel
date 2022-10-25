import { Component, OnInit } from '@angular/core';
import { ProjectDTO,ProjectLists } from "../../constants/projects";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 projects:ProjectDTO[] = ProjectLists;
  constructor() { }

  ngOnInit(): void {
  }

}
