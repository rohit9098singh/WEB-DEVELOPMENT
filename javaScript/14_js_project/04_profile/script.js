const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: '(web developer)',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: '(web designer)',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: '(intern)',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: '(the boss)',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id:5,
        name:"shashi kumar",
        job:"(Bca 1st year)",
        img:"http://127.0.0.1:5500/14_js_project/04_profile/index.html",
        text:"As a serious PUBG player, I am currently focused on my career but have not yet made concrete plans for the future. I am exploring the opportunities offered by Acharya Institute of Graduate Studies to find my path."
    }
  ];
//============= PERSONAL DETAILS ====================
const img = document.querySelector("#person-img"); // Corrected selector
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

//============= BUTTONS ===========================
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const surpriseMe = document.querySelector(".random-btn");

let profile_counter = 0;

window.addEventListener("DOMContentLoaded", function(e) {
    getProfileDetail();
});

prevbtn.addEventListener("click", function(e) {
    profile_counter--;
    if (profile_counter < 0) {
        profile_counter = reviews.length - 1;
    }
    getProfileDetail();
});

nextbtn.addEventListener("click", function(e) {
    profile_counter++;
    if (profile_counter > reviews.length - 1) {
        profile_counter = 0;
    }
    getProfileDetail();
});

surpriseMe.addEventListener("click",function(e){
       
    let randomIndex = Math.floor(Math.random() * reviews.length);
    displayProfile(randomIndex);
},false)

function getProfileDetail() {
    let profilevalue = reviews[profile_counter];
    img.src = profilevalue.img;
    author.textContent = profilevalue.name;
    job.textContent = profilevalue.job;
    info.textContent = profilevalue.text;
}
function displayProfile(index) {
    if (index >= 0 && index < reviews.length) {
        let profilevalue = reviews[index];
        img.src = profilevalue.img;
        author.textContent = profilevalue.name;
        job.textContent = profilevalue.job;
        info.textContent = profilevalue.text;
    } else {
        console.error("Invalid index provided for displaying profile.");
    }
}
