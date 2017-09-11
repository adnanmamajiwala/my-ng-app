import {Component, OnInit} from '@angular/core';

@Component({
  //select : '[app-servers]' // select data-attribute <div app-servers></div>
  //select : '.app-servers' // select <div class='app-servers'></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName: string = 'TestServer';
  userName: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer2'];
  toggleDisplay: boolean;
  clickDetails = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  toggle() {

    this.clickDetails.push(new Date());
    this.toggleDisplay = !this.toggleDisplay;
  }

  isUserNameEmpty() {
    return this.userName === '';
  }

  clearUserName() {
    this.userName = '';
  }

  getBackgroundColor(clickDt: number) {
    return clickDt >= 5 ? 'blue' : 'white'
  }
}
