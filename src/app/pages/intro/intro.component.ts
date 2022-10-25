import { Component, OnInit } from '@angular/core';
import {Socials } from "../../constants/social";
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
 socials = Socials;
  constructor() { }

  ngOnInit(): void {
  }

}
