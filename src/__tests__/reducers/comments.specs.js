import {comments, initialState} from '../../reducers/commentByMovie';
import {DELETE_COMMENT, GET_COMMENTS, ADD_COMMENT} from '../../constants/actions';

describe('Comments Reducer', () => {
  it('should be a function', () => {
    expect(typeof comments).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(comments(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should be able to read all the comments for a movie when there is no comments', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: []
      }
    };

    const expected = {
      285: []
    };

    const prevState = comments(undefined, action);
    expect(prevState).toEqual(expected);
    done();
  });

  it('should be able to add a comment for a movie', done => {
    const initialState = {
      285: [
        {
          movie_id: 285,
          author: 'John',
          content: 'Not a good movie',
          id: 1
        }
      ]
    };

    const actionAdd = {
      type: ADD_COMMENT,
      payload: {
        id: 2,
        author: 'Sam',
        content: 'een biejst',
        movie_id: 285
      }
    };

    const expected = {
      285: [
        {
          movie_id: 285,
          author: 'John',
          content: 'Not a good movie',
          id: 1
        }, {
          author: 'Sam',
          content: 'een biejst',
          id: 2,
          movie_id: 285
        }
      ]
    };

    expect(comments(initialState, actionAdd)).toEqual(expected);
    done();
  });

  it('should be able to read all the comments for a movie', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            oldId: 123456789,
            id: 1
          }, {
            movie_id: 285,
            author: 'John',
            content: 'Good movie',
            oldId: 12345678,
            id: 2
          }
        ]
      }
    };

    const expected = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        }, {
          movie_id: 285,
          author: 'John',
          content: 'Good movie',
          oldId: 12345678,
          id: 2
        }
      ]
    };

    const prevState = comments(undefined, action);
    expect(prevState).toEqual(expected);
    done();
  });

  it('should be able to read all the comments for multiple movies', done => {
    const action = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 285,
        comments: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            oldId: 123456789,
            id: 1
          }
        ]
      }
    };
    const action2 = {
      type: GET_COMMENTS,
      payload: {
        movie_id: 302,
        comments: [
          {
            movie_id: 302,
            author: 'John',
            content: 'Good movie',
            oldId: 12345678,
            id: 2
          }
        ]
      }
    };

    const expected = {
      285: [
        {
          movie_id: 285,
          author: 'Steve',
          content: 'Great movie',
          oldId: 123456789,
          id: 1
        }
      ],
      302: [
        {
          movie_id: 302,
          author: 'John',
          content: 'Good movie',
          oldId: 12345678,
          id: 2
        }
      ]
    };

    const prevState = comments(undefined, action);
    expect(comments(prevState, action2)).toEqual(expected);
    done();
  });
  it('should be able to delete a comment for a movie', done => {
    const initialState = {
      285: [
        {
          movie_id: 285,
          author: 'John',
          content: 'Not a good movie',
          id: 1
        }
      ]
    };

    const actionDelete = {
      type: DELETE_COMMENT,
      payload: {
        id: 1,
        movie_id: 285
      }
    };

    const expected = {
      285: []
    };

    expect(comments(initialState, actionDelete)).toEqual(expected);
    done();
  });

  //TODO add the tests for the add reducer
});
