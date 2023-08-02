import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public product : string = "trip tickets";
backgroundColor = "orange"
public isAvailiable !:boolean;
public skills : Array<string> = ["html", "css" , "javascript" ,"flex"];
public frameworks : Array<string> = [ "angular","bootstrap","react"];
public knoweledge !: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.isAvailiable = Math.random() > 0.5 ? true : false ;
    this.knoweledge = Math.random()>0.5 ? this.skills : this.frameworks
  }

}
