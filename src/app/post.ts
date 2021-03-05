import { User } from './user';

type PostRating = -1 | 1;

export interface Post {
  comment_count: number;
  id: number;
  /**
   * Total rating of the Post, including `user_post_rating`.
   */
  rating: number;
  /**
   * Date string in ISO 8601 format.
   */
  submitted_at: string;
  title: string;
  /**
   * URL associated with the post, or null if it's a text post.
   */
  url: string | null;
  /**
   * The value is null when the post is not rated or when
   * the user is not logged in.
   */
  user_post_rating: PostRating | null;
  user: User;
}
