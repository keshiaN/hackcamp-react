# HackCamp React

## HackJam 4: Redux advanced

### Topics covered

* CRUD with redux
* Redux forms
* Optimistic insert

### Getting started

First off, you will need to clone the project:
```bash
git clone url
cd hackcamp.react
npm install
npm run test

# Happy hacking ;)
```

### Information
The goal of this HackJam 4 is to guide you through some advanced concepts of Redux and React-Redux.

### Todos

#### Reduxify the movies

Store the movies with redux
* Create the corresponding actions
* Implement the reducers

When you completed this task, run `npm run test` to make sure that your implementation is right before plugging it into your app

Then use redux to get movies in your app. You need it in the `MovieList`, `Stat` and `Cart` component.

#### Reduxify the comments

You have to plug redux for the comments

* Create actions to create, read and delete comments
* Create a reducer to handle the comments

> The reducer is the following `src/reducers/commentByMovie`
> The reducer comes with tests, make sure to run those

> You'll also have to implement the tests for adding a comment

To run the tests run `npm run test`.
Make sure that the tests pass before using redux in your app.

* In the MovieComments component you need to get the comments from Redux
* In the MovieComment component you need to be able to delete a movie from Redux
* Finally in the MovieCommentForm you need to be able to add a comment to Redux

#### Redux forms

When the movies and the comments are reduxified, you can plug redux forms in your comment form.
Redux form will help you manage your form.

When redux form is plugged in your app, implement the validate function

The author field :
* is required 
* must start with an Upper case letter

The content field
* is required 
* cannot be longer than 150 characters

> We created a FormField component, you have to use it in your form but you have to implement it. 

The form must show the errors, even before the user has clicked on `add`
> Hint : use field level validation

The documentation can be found here : http://redux-form.com/6.8.0/docs/api/

#### Optimistic insert
The goal here is to deal with slow operations. Imagine you have a very slow server, you don't want the user to wait 2 seconds before seeing his comment added to a movie.
So how does it work? When you post a comment, before posting it to the server you add it to your redux store (with a randomly generated id), then if the post to the server is successful you update your store with the id returned by the server
otherwise you delete the comment from the store.

With this technique you make sure that the user will directly see his comment being posted and won't spam the `add` button

> There are tests for this, check the tests/optimisticInsert.specs.js tests and remove the x before the first describe

To test that everything works, add to the docker-compose.yml file those 2 lines in the backend section

    environment: 
        -SLOW=true

This will fore the server to wait 2 seconds before responding to each request, so you can easily test your optimistic insert
#### Bonus: Offline

Use Redux Persist to persist the list of movies and the list of comments

docs : https://github.com/rt2zz/redux-persist