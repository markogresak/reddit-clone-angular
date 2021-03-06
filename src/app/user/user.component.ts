import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedUser } from '../detailed-user';
import { UserTab } from '../user-tab.enum';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: DetailedUser;
  UserTab = UserTab;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.id).subscribe((user) => {
      this.user = user;
    });
  }

  get id(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  get tab(): UserTab | null {
    const tab = this.route.snapshot.paramMap.get('tab');
    return this.isUserTab(tab) ? tab : null;
  }

  private isUserTab(value: any): value is UserTab {
    return Object.values(UserTab).includes(value);
  }
}
