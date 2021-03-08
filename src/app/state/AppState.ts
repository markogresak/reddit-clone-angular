import { State as PostsState } from './posts.reducer';

export interface AppState {
  posts: PostsState;
}
