// alert("how are you dear");

$("h1").css("color","blue"); // when you have two values inside the css means you are setting the value 
console.log( $("h1").css("color","blue")); 

$("h1").css("color");// when you have one value in the css means u are getting the value
console.log( $("h1").css("color"));  


// we can even add class defined in css directly to the hmtl 
$("h1").addClass("big-title margin-50");

// to remove the class
console.log($("h1").hasClass("margin-50")); 

// add text
$("h1").text("hey buddy");

// add html
$("button").html("<em>hey buddy</em>");

// get img
console.log( $("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");


//=========================== ADDING EVENT LISTNER =============================================================

// 1)NORMAL
// for(i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         console.log("button clicked");
//         document.querySelector("h1").style.color="purple";
//     })
// }

// 2)JQuery
$("button").click(function(){
    console.log("button clicked");
    $("h1").css("color","purple");
})

$("input").keypress(function(event){
    console.log("key pressed",event.key);
})

$(document).keypress(function(e){
    $("h1").text(e.key);
})

$("h1").on("mouseover",function(){    //or click event
    $("h1").css("color","pink");
})


//============================== ADDING AND REMOVING ELEMENTS =========================================
$("h1").before("<button>new</button>");
$("h1").after("<button>recent</button>");

$("h1").prepend("<button>recent</button>");
$("h1").append("<button>recent</button>");

//============================== ANIMATION ==============================================================
// 1) SIMPLE METHOD

$("button").on("click",function(){
    //$("h1").hide();
    //$("h1").fadetoggle();
    //$("h1").slideup();
    //$("h1").slidedown();

});

// 2)animated method
$("button").on("click",function(){
    $("h1").animated({opacity:0.6});
})