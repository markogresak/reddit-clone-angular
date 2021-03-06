import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  get id(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  get tab(): 'posts' | 'comments' | null {
    const tab = this.route.snapshot.paramMap.get('tab');
    if (tab === 'posts' || tab === 'comments') {
      return tab;
    }
    return null;
  }
}
