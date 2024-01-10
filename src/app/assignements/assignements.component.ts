import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { Assignement } from './assignement.model';


@Component({
  selector: 'app-assignements',
  standalone: true,
  imports: [CommonModule,RenduDirective,FormsModule,MatButtonModule,
    MatDatepickerModule,MatFormFieldModule,MatInputModule,MatNativeDateModule],
  templateUrl: './assignements.component.html',
  styleUrl: './assignements.component.css'
})
export class AssignementsComponent implements OnInit {
  nomDevoir = ""
  datePicked!:Date
  onSubmit(event:any){
    const newAssignement = new Assignement()
    newAssignement.nom = this.nomDevoir
    newAssignement.date = this.datePicked
    newAssignement.done = true
    this.assignements.push(newAssignement)

  }
  ngOnInit():void{
    setTimeout(()=>{
      this.isActive = true
    },2000)
  }
  title = "Assignement component is working !!!"
  isActive = false
  assignements:Assignement[] = [
    {
      nom:'Name 1',
      date:new Date('2020-12-15'),
      done:true,
    },
    {
      nom:'Assignement 2',
      date:new Date('2024-01-09'),
      done:false,
    },
    {
      nom:'Assignement 3',
      date:new Date('2022-11-05'),
      done:true,
    },
  ]
}
