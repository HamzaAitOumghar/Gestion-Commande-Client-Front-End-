import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})


export class AppComponent {
  cssCode='block';
  condition=true;
  constructor(private router: Router) {
    
  }

  hideSideBar(event){
      if(this.cssCode=='block'){
        this.cssCode='none';
        this.condition=false;
      }
      else{
        this.cssCode='block';
        this.condition=true;
      }
  }

 

}
