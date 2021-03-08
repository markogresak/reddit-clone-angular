import { State as PostsState } from './posts.reducer';
import { State as PostDetailsState } from './post-detail.reducer';

export interface AppState {
  posts: PostsState;
  postDetails: PostDetailsState;
}
