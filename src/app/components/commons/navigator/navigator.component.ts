import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor() {
    $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 300
     edge: 'right', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true, // Choose whether you can drag to open on touch screens,
     onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
     onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
   }
 );
   }

  ngOnInit() {
  }

}
