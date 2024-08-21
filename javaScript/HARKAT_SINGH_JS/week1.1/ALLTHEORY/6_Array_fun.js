const initialArray=[1,2,3];

// to enter  a particular value in it 
initialArray.push(4);
console.log(initialArray);

// to reomove element from the array then use pop but removes from end

initialArray.pop();
console.log(initialArray);

// suppose i want to remove element from the front then 

initialArray.shift();
console.log(initialArray);


// to put something in the front

initialArray.unshift(0);
console.log(initialArray);

// concat()
        function concatExample(arr1, arr2) {
            console.log("Original Arrays:", arr1, arr2);
        
            let arr3 = arr1.concat(arr2);
            console.log("After concat:", arr3);
        }
        concatExample([1, 2, 3], [4, 5, 6]);

        // or
        const initialArray_1=['a','b'];
        const secondarray_1=['c','d'];
        for(let i=0;i<secondarray_1.length;i++){
            initialArray_1.push(secondarray_1[i]);
        }
        console.log(initialArray_1);
        
