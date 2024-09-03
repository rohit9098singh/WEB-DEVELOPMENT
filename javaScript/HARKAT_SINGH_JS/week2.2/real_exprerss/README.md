doctors have skills 
they have accquired that skills over years
they provide services to other people who want to use their skills


to expose there life skills they open a clicik 
people who want to use their skills line up in a waiting roon one by one the doctor meets them 
the doctor is single threaded (because he is intended to see only one person at a particular time )


now how do people reach the doctor?
they get their address and navigate to it

note==> u cannot get into the doctors room directly (you have to wait in the loby until he is free to attend you )a nd they specifically has a door for it to get enter

on looking at the patient he can even suggest the patient to go and get the medicine till then he can have a look on other patient issues this is similar to deligating the task

note==> once that patient comes back with the medicine he cannot meet the doctor immideatley he will have to again wait in the wating room until the doctor becaomes free to check him again 


if we have written a progeramme which calculate the sum of first 50 numbers so how will i expose it to the world..
Q) if i want it to expose it to the world ?
  => this is where http comes into picture it lets you create a hospital where people can come and find you 
 

 Q) How do i expose my doctor functionality to the other people ?
 => by creating an http server...

 Q) how do i create an http server?
  => express

============================================================

what are the request methods ?
==> 1. GET-going for a consultation to get a check up // measn just asking something 
    2. POST- going to get a new kidney inseted // create a new instagram post 
    3. put-going to get kidney replaced  // update your password ,name 
    4. delete- going to get a kidney removed  

============================================================
Q)what are the impoertant status code ?
=> 200 - everything went fine
   404- doctor is not in the hospital
   500- mid surgery light went away
   411- imputs are incorrect 
   403-you were not allowed in the hospital


============================================================
Q) what is the difference between a normal function and an arrow function ?
==> 1) does  uses function keyword to define the function .
syntax= function add(a, b) {
    return a + b;
}

      .) where as arrow funnction does not uses the function keyword to define the function..

    syntax=const add = (a, b) => a + b;

2)has its own this context.
ex: const obj = {
    value: 10,
    normalFunction: function() {
        console.log(this.value); // Logs 10
    }
};
obj.normalFunction();

     .)  Does not have its own this context
    eg: const obj = {
        value: 10,
        arrowFunction: () => {
            console.log(this.value); // Logs undefined, because `this` is not bound to `obj`
        }
    };
    obj.arrowFunction();

3) Can be used as a constructor and invoked with the new    keyword to create instances
 function Person(name) {
    this.name = name;
}
const person = new Person('Alice'); // Works fine

    .)Cannot be used as constructors and will throw an error if used with new.
    const Person = (name) => {
        this.name = name;
    };
    const person = new Person('Alice'); // Throws error

4) function logArgs() {
    console.log(arguments); // Logs the arguments passed to the function
}
logArgs(1, 2, 3);
  
     .) const logArgs = () => {
        console.log(arguments); // Throws an error
    };

====================================================================
Q) why do we need only the datbase to store the data why dont can we store it in the notepad?
=>  1. you dont have a standard way to store the data
    2.hard to distribute
    3.dbs are optimesed for read and write 
    4.contais logic for indexing to make some quries faster