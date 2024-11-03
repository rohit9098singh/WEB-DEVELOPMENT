import { atom, selector } from "recoil";

// Count atom
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

// Selector to determine if count is even
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0; // Returns true if even, false if odd
  },
});

// Assuming you have a todosAtom and filterAtom; define them if not
// export const todosAtom = atom({
//   key: "todosAtom",
//   default: [],
// });

// export const filterAtom = atom({
//   key: "filterAtom",
//   default: "",
// });

// Filtered todos selector
export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);
    return todos.filter(
      (todo) => 
        todo.title.includes(filter) || todo.description.includes(filter)
    );
  },
});
