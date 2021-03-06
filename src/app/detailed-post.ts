import { Post } from './post';
import { Comment } from './comment';

export interface DetailedPost extends Post {
  comments: Comment[];
  /**
   * Text of the post, or null if it's a link post.
   */
  text: string | null;
}
