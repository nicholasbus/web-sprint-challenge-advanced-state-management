# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- The context API helps solve the problem of prop drilling. the context API provides a way to share values from the parent to its children without passing the value through props

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are objects containing the type of action to be performed and optionally, a payload. Actions are dispatched to a reducer to tell the reducer what to do. Reducers are functions that update the store based on what action is passed to it. The store is a global state object, it is known as a 'single source of truth' because this is the state that the entire application can read from.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- `redux-thunk` allows us to write action creators that return a function instead of an action object, which allows us to perform asyc operations within the action creator. This changes our action creator to return a function that takes in `dispatch` as a parameter.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system that we have learned this sprint is Redux with thunk because I like how easy it is to access the store throughout the entire application and I also like how thunk allows for asynchronous operations to be done within the action creator.
