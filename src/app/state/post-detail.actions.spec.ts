import * as fromPostDetail from './post-detail.actions';

describe('loadPostDetails', () => {
  it('should return an action', () => {
    expect(fromPostDetail.loadPostDetails({ id: 1 }).type).toBe(
      '[PostDetail] Load PostDetails',
    );
  });
});
