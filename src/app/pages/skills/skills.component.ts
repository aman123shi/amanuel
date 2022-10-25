import { Component, OnInit } from '@angular/core';
import { SkillDTO,SkillInfo } from "../../constants/skills";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
 skills:SkillDTO[] = SkillInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
