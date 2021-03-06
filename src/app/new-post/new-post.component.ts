import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  get type(): 'link' | 'text' | null {
    const type = this.route.snapshot.paramMap.get('type');
    if (type === 'link' || type === 'text') {
      return type;
    }
    return null;
  }
}
