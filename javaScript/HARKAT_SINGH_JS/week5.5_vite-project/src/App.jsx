import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([
    {
    title:"got to the gym",
    description:"fromm 7 to 9",
    completed:false
   },
   {
     title:"study dsa",
     description:"study from 9 to 11" ,
     "completed":true
   }
]); 

function addTodo(){
  // [1,2]
  //[...todes,3]=>[1,2,3] it just helps in somewhat appending things in an array
  setTodos([...todos,{
    title:"new Todo",
    description:"description of the new todo"
  }])
}
return (
  <div>
    <button onClick={addTodo}>Add a random todo</button>
    {/* Write the logic here to render all todos according to their preference */}
    
    {/* Assuming todos is an array and you want to render the first todo */}\

    {/** THESE ARE THE CONVENTIONAL WAY OF DOING THE THINGS AND PRINTING BUT ITS NOT A BETTER WAY 
     * 
     *     <Todo title={todos[0].title} description={todos[0].description} />
     *     <Todo title={todos[1].title} description={todos[1].description} />
    */}

    {/**THIS IS THE BEST APPOROACH  */}
    {
      todos.map(function(todo){
        return <Todo title={todo.title} description={todos.description}/>
      })
    }
  </div>
);

}

function Todo(props){
         return <div>
              <h1>{props.title}</h1>
              <h1>{props.description}</h1>
             
         </div>
     }

export default App;
