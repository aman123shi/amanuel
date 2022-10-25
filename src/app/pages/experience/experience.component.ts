import { Component, OnInit } from '@angular/core';
import { experiences,ExperienceDTO } from "../../constants/experience";
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences:ExperienceDTO[] = experiences;
  constructor() { }

  ngOnInit(): void {
  }

}
