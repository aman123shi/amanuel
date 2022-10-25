import { Component, OnInit } from '@angular/core';
import { aboutMeBasicInfo,BasicInfo } from '../../constants/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  info:BasicInfo [] = aboutMeBasicInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
