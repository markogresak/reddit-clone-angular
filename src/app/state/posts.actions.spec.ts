import * as fromPosts from './posts.actions';

describe('loadPosts', () => {
  it('should return an action', () => {
    expect(fromPosts.loadPosts().type).toBe('[Posts] Load Posts');
  });
});
