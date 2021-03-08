import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from './AppState';
import { reducer as postsReducer } from './posts.reducer';

export const reducers: ActionReducerMap<AppState> = {
  posts: postsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
