import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// ========= SLICES ========
import appReducer from "./slices/app";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  //TODO => create and map render
  app: appReducer,
});
export { rootPersistConfig, rootReducer };

{
  /*
========== FIRST PART==========
import { combineReducers } from "redux";
What it does: Imports combineReducers from Redux, which is used to merge multiple reducers into a single root reducer.
Why it’s needed: If your app has multiple slices of state (e.g., user info, cart items), each slice has its own reducer. combineReducers allows you to merge all these reducers into one rootReducer.
What happens if skipped: You would need to manage all reducers manually, which gets messy as the app grows.

========== SECOND PART==========
import storage from "redux-persist/lib/storage";
What it does: Imports the default storage engine for redux-persist, which saves the app's state in the browser's localStorage.
Why it’s needed: To make your app’s state persistent (survive page reloads).
What happens if skipped: State will reset every time the page is refreshed.
  
========== THIRD PART =========
const rootPersistConfig = {...}
What it does: Defines the configuration for redux-persist.

key: "root": The key under which the state is stored in localStorage.
storage: Specifies that the storage engine is localStorage.
keyPrefix: "redux-": Adds a prefix to the key name in localStorage for organization.
Why it’s needed: This tells redux-persist where and how to store the state.
What happens if skipped: Persistence won’t work. The app’s state will reset on refresh.

========== FORTH PART ==========
What it does: Combines all individual reducers into one rootReducer.
Why it’s needed: Redux requires a single root reducer to manage the state. Even if you have just one reducer, it’s good practice to use combineReducers for scalability.
What happens if skipped: Redux will throw an error because it requires a reducer.

======== FIFTH PART ===========
Why it’s needed: These configurations and the reducer need to be used by the store to set up Redux with persistence.
* */
}
