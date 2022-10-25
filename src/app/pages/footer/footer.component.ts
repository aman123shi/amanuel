import { Component, OnInit } from '@angular/core';
import { Socials } from "../../constants/social";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 socials = Socials;
 date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
