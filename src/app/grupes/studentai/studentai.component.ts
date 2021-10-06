import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-studentai',
  templateUrl: './studentai.component.html',
  styleUrls: ['./studentai.component.css']
})
export class StudentaiComponent implements OnInit {

  @Input() students;
  @Output() dalyvaujaEmitter = new EventEmitter<{name:string, surname:string, index:number}>();
  @Output() nedalyvaujaEmitter = new EventEmitter<{name:string, surname:string, index:number}>();

  @ViewChild("studentName", {static:false} ) nameInput: ElementRef;
  @ViewChild("studentSurname", {static:false} ) surnameInput: ElementRef;

  pridetiVisible=false;
  constructor() { }

  ngOnInit(): void {
  }



  dalyvauja(name:string, surname:string, index: number){
    
    console.log('Dalyvauja: '+ name +" "+surname+" "+index);
    this.dalyvaujaEmitter.emit({name:name, surname:surname, index});
    this.students.splice(index,1);
    
  }

  nedalyvauja(name:string, surname:string, index: number){
    console.log('nedalyvauja: '+ name+" "+surname+" "+index);
    this.nedalyvaujaEmitter.emit({name:name, surname:surname, index});
    this.students.splice(index,1);
    
  }

  addStudent(){
    this.students.push({
      name: this.nameInput.nativeElement.value,
      surname: this.surnameInput.nativeElement.value
    })
    this.nameInput.nativeElement.value = "";
    this.surnameInput.nativeElement.value = ""
}
}
