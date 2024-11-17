# REDUX :- a container where you can store your whole application data. in the form of an array. and has huge data that is whole application data inside it 

ex-> our house store room

# BASICALLY THERE ARE FOUR CORE OF REDUX GIVEN BELOW :

 1) ACTION
 2) REDUCER
 3) STORE 
 4) VIEW 

========================================================================================================================================
**ACTION**:-An action is a message that tells the application what you want to do. It's just a plain object with a type property (a name for the action) and sometimes extra information (payload).
 
   Example:const addItemAction = {
            type: 'ADD_ITEM',
           payload: { name: 'Apple', quantity: 1 },
          };

  **DESCRIPTION**:-type: Describes what’s happening  ('ADD_ITEM' here).
                   payload: Extra data needed to perform the action (like item details).

===========================================================================================================================================
**REDUCER** :-A reducer is like a "helper" that decides how to update the data (state) based on an action. It takes the current state and the action, then gives back a new state.  

   Example:const initialState = { items: [] };

           function reducer(state = initialState, action) {
                 if (action.type === 'ADD_ITEM') {
                      return { ...state, items: [...state.items, action.payload] };
                    }
               return state; // Return unchanged state if action isn't recognized
            }

===========================================================================================================================================

**STORE**:-The store is like a box that holds all the data (state) for your app. It listens for actions and uses the reducer to update the data.

   Example:import { createStore } from 'redux';
           const store = createStore(reducer);

           The store keeps the app’s state.
           You can read the state (store.getState()) or send actions to it (store.dispatch(action)).

===========================================================================================================================================
**VIEW**:-The view is what the user sees. In a Redux app, the view is connected to the store. When the store changes, the view updates automatically to show the latest data.

 EXAMPLE:    function App({ items }) {
                 return (
                        <ul>
                          {items.map((item, index) => (
                           <li key={index}>{item.name}</li>
                        ))}
                       </ul>
                    );
                }

Action: "I want to add an item."
Reducer: "Okay, I’ll add it to the list and give back the updated list."
Store: "I’ll keep the updated list safe and notify the view."
View: "I see the new item and show it to the user."



============================================================================================================================================

## A COUNTER APP EXAMPLE 

Certainly! Let’s break down how the four parts of Redux (Action, Reducer, Store, and View) work together step by step with an example.

Imagine a Counter App
You have a button to increment or decrement a number.
The number is displayed on the screen.
1. Action: The Message
An action is like a command or message to say, "Hey, I want to do something!"

For example, if you want to increment the number:
const incrementAction = {
  type: 'INCREMENT',
  payload: 1, // Optional: the amount to increment
};
const decrementAction = {
  type: 'DECREMENT',
  payload: 1,
};
 


Reducer: The Rule Book
The reducer decides how the state should change based on the action.

Here’s how the reducer works for the counter:

const initialState = { count: 0 }; // Starting value of the counter

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload }; // Add payload to count
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload }; // Subtract payload from count
    default:
      return state; // If no action matches, return the current state
  }
}



Store: The State Keeper
The store is like the brain of your app. It:

Stores the state (e.g., { count: 0 }).
Listens for actions (like INCREMENT or DECREMENT).
Updates the state using the reducer when an action is dispatched.
Here’s how you set up the store:

javascript
Copy code
import { createStore } from 'redux';

const store = createStore(counterReducer);

// Get the current state:
console.log(store.getState()); // { count: 0 }

// Dispatch an action to update the state:
store.dispatch(incrementAction); // Send the 'INCREMENT' action
console.log(store.getState()); // { count: 1 }

// Dispatch another action:
store.dispatch(decrementAction); // Send the 'DECREMENT' action
console.log(store.getState()); // { count: 0 }



View: Display to the User
The view (e.g., React components) listens to the store. Whenever the store’s state changes, the view updates automatically.

In a React app, you connect the view to the store using a library like react-redux.

Here’s an example of a simple React component connected to Redux:

javascript
Copy code
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count); // Get `count` from the store
  const dispatch = useDispatch(); // Send actions to the store

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-</button>
    </div>
  );
}