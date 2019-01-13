import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition ,animate} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('changeState',[
      state('rest',style({
        opacity:1
      })),
      state('hover',style({
        opacity:0.7,
        transform : 'scale(1.1)'
      })),
      state('press',style({ 
        transform : 'scale(0.9)',
        color:'white'
      })),

      transition('rest=>hover',animate('400ms ease-in')),
      transition('hover=>rest',animate('400ms ease-out')),
      transition('hover=>press',animate('400ms ease-in')),
      transition('press=>rest',animate('400ms ease-out'))


    ])
  ]
})
export class NavbarComponent implements OnInit {

  @Output() public toggleSidebar: EventEmitter<any> = new EventEmitter();

  currentState="rest";

  constructor() { }

  ngOnInit() {
  }
  showSideBar(){
    this.toggleSidebar.emit()
  }

  setMouse(state){
    this.currentState=state;
  }

}
