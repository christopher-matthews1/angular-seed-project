import { Component, Input, OnInit } from "@angular/core";
import { HeaderTitleService } from "../services/header-title.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit{

  @Input() user;

  userName: string = "Chris";
  title: string;

  constructor(private headerTitleService: HeaderTitleService) {

  }

  ngOnInit(): void {
    this.title = this.headerTitleService.getTitle(this.userName);
  }

}
