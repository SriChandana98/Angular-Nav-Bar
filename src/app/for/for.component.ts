import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  people:string[]=["snehitha","riya","poojitha","chandana"];
  AddPeople(ppl:string){
    this.people.push(ppl);
  }


  constructor() { }

  ngOnInit() {
  }

}
