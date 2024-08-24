setTimeout(function() {
    console.log("inside first setTimeout");
    setTimeout(function() {
        console.log("inside the second setTimeout");
        setTimeout(function() {
            console.log("inside the third setTimeout");
        }, 3000);
    }, 2000);
}, 1000);
