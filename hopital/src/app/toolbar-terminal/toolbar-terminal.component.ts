import { Component,Input,Output, OnInit,EventEmitter,HostListener } from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';
import { LoaderService } from '../loader/loader.service';
import { AuthService } from 'src/security/auth.service';

@Component({
  selector: 'app-toolbar-terminal',
  templateUrl: './toolbar-terminal.component.html',
  styleUrls: ['./toolbar-terminal.component.scss']
})
export class ToolbarTerminalComponent implements OnInit {

  
  
  
  authenticated = false;

  constructor(private http: HttpClient,
              public loaderservice: LoaderService,
              private authservice: AuthService) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.authservice.logout();
  }
  
}