import { UserRating } from './UserRating';
import { User } from './user';

export interface Comment {
  id: number;
  /**
   * Refers to the parent comment, null means it's a top-level comment.
   */
  parent_comment_id: number | null;
  post_id: number;
  rating: number;
  /**
   * Date string in ISO 8601 format.
   */
  submitted_at: string;
  text: string;
  user_comment_rating: UserRating | null;
  user: User;
}
