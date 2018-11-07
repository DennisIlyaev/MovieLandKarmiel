import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  passCheck;
  allowedToEnter = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkPass() {
    this.passCheck === '12333' ? this.allowedToEnter = true : this.allowedToEnter = false;
  }

  redirect() {
    this.router.navigate(['/admin']);
  }

  hallOne() {
    this.router.navigate(['/hallone']);
  }

  hallTwo() {
    this.router.navigate(['/halltwo']);
  }





}
