import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';

export interface DetailedUser extends User {
  comments: Comment[];
  posts: Post[];
}
