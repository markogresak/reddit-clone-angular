import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user: User | null = null;

  constructor() {}

  ngOnInit(): void {
    // TODO: get real user data
    // this.user = {
    //   id: 123,
    //   username: 'Some user',
    // };
  }
}
