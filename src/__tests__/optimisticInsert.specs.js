import {comments} from '../reducers/commentByMovie';
import {ADD_COMMENT_START, ADD_COMMENT_SUCCESS} from '../constants/actions';

xdescribe('Optimistic update tests', () => {
  it('should be able to add a comment for a movie', done => {
    const actionStart = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };
    const expectedStart = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          id: 123456789
        }
      ]
    };
    const expectedSuccess = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        }
      ]
    };

    const prevState = comments(undefined, actionStart);
    expect(prevState).toEqual(expectedStart);
    expect(comments(prevState, actionSuccess)).toEqual(expectedSuccess);
    done();
  });

  it('should be able to add a comment for a movie when there are other comments for other movies', done => {
    const actionStart1 = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess1 = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };

    const actionStart2 = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 302,
        author: 'Steve',
        content: 'Great movie',
        id: 1234567891
      }
    };

    const actionSuccess2 = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 302,
        author: 'Steve',
        content: 'Great movie',
        oldId: 1234567891,
        id: 2
      }
    };
    const expectedSuccess = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          id: 1,
          oldId: 123456789
        }
      ],
      302: [
        {
          movie_id: 302,
          author: 'Steve',
          content: 'Great movie',
          oldId: 1234567891,
          id: 2
        }
      ]
    };

    let prevState = comments(undefined, actionStart1);
    prevState = comments(prevState, actionSuccess1);
    prevState = comments(prevState, actionStart2);
    prevState = comments(prevState, actionSuccess2);
    expect(prevState).toEqual(expectedSuccess);
    done();
  });
});
