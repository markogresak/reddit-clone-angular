import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromNowPipe } from '../from-now.pipe';

import { PostItemComponent } from './post-item.component';

const mockPost = {
  user_post_rating: null,
  user: {
    username: 'user3',
    id: 3,
  },
  url: null,
  title: 'Post 11 (with text)',
  submitted_at: '2018-01-12T10:31:53.654855',
  rating: 2,
  id: 1,
  comment_count: 1,
};

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostItemComponent, FromNowPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
