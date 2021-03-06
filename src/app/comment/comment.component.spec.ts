import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromNowPipe } from '../from-now.pipe';

import { CommentComponent } from './comment.component';

const mockComment = {
  user_comment_rating: null,
  user: {
    username: 'user2',
    id: 2,
  },
  text: 'Lorem ipsum dolor sit amet',
  submitted_at: '2018-01-12T10:31:54.638542',
  rating: 3,
  post_id: 7,
  parent_comment_id: null,
  id: 188,
};

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent, FromNowPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = mockComment;
    component.allComments = [mockComment];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
