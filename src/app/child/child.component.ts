import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  login = new EventEmitter<boolean>();

  loginOutput(login: boolean) {
    this.login.emit(login)
    console.log(login);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
