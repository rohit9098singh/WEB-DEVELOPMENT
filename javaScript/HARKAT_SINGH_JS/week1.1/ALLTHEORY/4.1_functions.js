/*
    1) ======================= one way of doing this ============================= 

        function calAritmetic(a,b,type){
            if(type=="sum"){
                return a+b;
            }
            if(type=="minus"){
                return a-b;
            }
        }

        const value= calAritmetic(1,2,"sum");
        console.log(value);
*/
/*     
      ======================================== ANnother way =======================
        function calAritmetic(a, b, type) {
        if (type == "sum") {
            const value = sum(a, b); // Call to sum(a, b) function
            return value; // Returning the result of sum(a, b)
        }
        if (type == "minus") {
            // Notice the error here, should be `if (type == "minus")`
            const value = sub(a, b); // Call to sub(a, b) function
            return value; // Returning the result of sub(a, b)
        }
        }

        function sum(a, b) {
        return a + b; // Function returns the sum of a and b
        }

        function sub(a, b) {
        return a - b; // Function returns the difference between a and b
        }

        const value = calAritmetic(1, 2, "minus");
        console.log(value); // Output: -1
*/
// =========================== third way of doing =================================
        function calculateArithmetic(a,b,aritmeticFinalFunction){
            const ans=aritmeticFinalFunction(a,b);
            return ans;
        }

        function sum(a,b){
            return a=b;
        }

        const value=calculateArithmetic(1,2,sum);
        console.log(value);
