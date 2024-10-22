import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux';

function App() {
 const count=useSelector((state)=>state.counter.value)
  
  function handleIncrementClick(){

  }
  function handleDecrementClick(){
    
  }
  return (
   <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
   </div>
  )
}

export default App;

/**
 * 
 * Action:An action is an object that describes an event or change that should happen in the application.
It has a type field (a string that specifies the kind of action) and optionally, other properties called the payload (the data sent with the action).

Example:
       const addItemAction = {
                                type: 'ADD_ITEM',
                                payload: { id: 1, name: 'Item 1' }
                              };
                              
 
 Reducer:A reducer is a pure function that takes the current state and an action as arguments and returns a new state.
It determines how the state should be updated when an action is dispatched.

Example:
          const itemsReducer = (state = [], action) => {
            switch (action.type) {
              case 'ADD_ITEM':
                return [...state, action.payload];
              default:
                return state;
            }
          };

Slice:A slice is a collection of reducers and actions that pertain to a specific part of the state. It represents a "slice" of the global state.
Redux Toolkit simplifies handling state by combining actions and reducers in slices.

Example using Redux Toolkit:
                            import { createSlice } from '@reduxjs/toolkit';

                            const itemsSlice = createSlice({
                              name: 'items',
                              initialState: [],
                              reducers: {
                                addItem(state, action) {
                                  state.push(action.payload);
                                },
                              },
                            });

                            export const { addItem } = itemsSlice.actions;
                            export default itemsSlice.reducer;
                            Store:

The store is the centralized place where the state of the entire application is stored.
It holds the state and provides methods like dispatch() to send actions and getState() to access the current state.
You create a store using createStore() or Redux Toolkit’s configureStore().
Example:
              import { configureStore } from '@reduxjs/toolkit';
              import itemsReducer from './itemsSlice';

              const store = configureStore({
                reducer: {
                  items: itemsReducer,
                },
              });

              export default store;
              State:

The state is the current data that represents the status of the application. It’s an object that lives in the store.
The state is updated when actions are dispatched, and reducers decide how to modify the state.
Example of accessing state:
                              const currentState = store.getState();
                              console.log(currentState.items);

 */
