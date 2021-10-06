import { Component, OnInit } from '@angular/core';
import { grupes } from './grupes.data';

@Component({
  selector: 'app-grupes',
  templateUrl: './grupes.component.html',
  styleUrls: ['./grupes.component.css'],
})
export class GrupesComponent implements OnInit {
  grupes = grupes;
  dalyvauja = [];
  nedalyvauja = [];
  pridetiVisible=false;

  dalyvaujantys(dalyvauja) {
    this.dalyvauja.push(dalyvauja);
    console.log(dalyvauja);
  }

  nedalyvaujantys(nedalyvauja) {
    this.nedalyvauja.push(nedalyvauja);
  }

  constructor() {}

  ngOnInit(): void {}

  addGroup(
    addGroup: HTMLInputElement,
    addCity: HTMLInputElement,
    addDate: HTMLInputElement
  ) {
    this.grupes.push({
      group: addGroup.value,
      location: addCity.value,
      start_date: addDate.value,
      students: [],
    });
    addGroup.value = "";
    addCity.value = "";
    addDate.value = ""

  }
}
