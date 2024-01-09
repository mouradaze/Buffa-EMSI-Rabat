import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-assignements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignements.component.html',
  styleUrl: './assignements.component.css'
})
export class AssignementsComponent {
  title = "Assignement component is working !!!"
  assignements = [
    {
      nom:'Name 1',
      date:'2020-12-15',
      done:true,
    },
    {
      nom:'Assignement 2',
      date:'2024-01-09',
      done:false,
    },
    {
      nom:'Assignement 3',
      date:'2022-11-05',
      done:true,
    },
  ]
}
