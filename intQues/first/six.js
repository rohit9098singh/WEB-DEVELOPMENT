function curryFunction(a){
    return function (b){
        const mult= a*b;
    }
}

curryFunction(5)