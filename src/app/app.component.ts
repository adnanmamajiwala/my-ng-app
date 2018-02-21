import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  name: string;

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB0CJzxdsERFN8W9EGS9KtbZF8eOcivTf0",
      authDomain: "my-ng-app-f1a4b.firebaseapp.com"
    })
  }
}
