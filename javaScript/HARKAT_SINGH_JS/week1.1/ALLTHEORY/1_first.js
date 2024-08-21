// write a programme to greeet a person given their first name and last name



function greetPerson(){
    const firstName= prompt("enter your first name :");
    const lastName=prompt("enter your surname");
    const greeting=`hello ${firstName} ${lastName} Welcome to ourpage`;
    console.log(greeting);
    
}

greetPerson();