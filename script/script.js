let videoContainer = document.querySelector(".video-container");
let slidingBtn = document.querySelector(".btn-slide")
let slidingDiv = document.getElementsByClassName("slidevideo-container");
let slidingDivId = document.getElementById("slide-left")
let dropdownContent = document.querySelector(".dropdown-content")

// append list to dropdown content in Navbar
let arr = ["Science Class 12", "Science Class 11", "Maths Class 12", "Maths Class 11", "Maths Class 12"]
for(let eachItem of arr){
  let createList = document.createElement("a")
  createList.href = "#";
  createList.textContent = eachItem;
  dropdownContent.appendChild(createList);
}


// when button is clicked load the details of the div as an inner html inside inner
let data = [{
    id:"1",
    link:"./public/HTML/show.html",
    img: "./public/images-and-videos/image6.jpg",
    title:"Class 10 Complete Science Videos",
    author:"Colt Steele",
    downloads:"4000",
    price:"50"
},
{
    id:"3",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image5.jpg",
    title:"Class 10 Complete Maths Videos",
    author:"Jay",
    downloads:"5000",
    price:"10" 
},
{
    id:"3",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image 2.jpg",
    title:"Class 10 Complete Social Videos",
    author:"John",
    downloads:"7000",
    price:"100" 
},
{
    id:"3",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image5.jpg",
    title:"Class 10 Complete Hindi Videos",
    author:"John",
    downloads:"7000",
    price:"100" 
}]

// looping sliding data
let slideData = [{
    id:"1",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image5.jpg",
    title:"Class 7 Complete Science Videos",
    author:"Colt Steele",
    downloads:"4000",
    price:"50"
},
{
    id:"3",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image 2.jpg",
    title:"Class 7 Complete Maths Videos",
    author:"John",
    downloads:"5000",
    price:"100" 
},
{
    id:"3",
    link:"show.html",
    img: "../public/images-and-videos/image5.jpg",
    title:"Class 7 Complete Maths Videos",
    author:"Jay",
    downloads:"7000",
    price:"100" 
},
{
    id:"3",
    link:"../public/HTML/show.html",
    img: "../public/images-and-videos/image 2.jpg",
    title:"Class 7 Complete Maths Videos",
    author:"Jay",
    downloads:"7000",
    price:"50" 
}]

// dynamically load html elements
let newData = data.map(loopData)
let loopSlidingData = slideData.map(loopData)

// function to run when the window loads
window.onload = function(){
  videoContainer.innerHTML = newData.join("");
  slidingDivId.innerHTML = loopSlidingData.join("");
  slidingDivId.style.display = "none";
}


// function to dynamically load div details
function loopData(eachData){
return `<div class="video1">
            <!-- image title and other section -->
            <div class="img-div">
                <a href="${eachData.link}"><img class="img" src="${eachData.img}"></img>
            </div>
            <!-- content div -->
                <div class="content-div">
                    <h3 class="title">${eachData.title}</h3>
                    <p class="author">${eachData.author}</p>
                    <p class="downloads">${eachData.downloads} downloads</p>
                    <p class="price">£ ${eachData.price}</p>
                </div>
            </a>
        </div>`
}

// function to slide the div when the button is clicked
function slide(obj) {
  // let w = parseInt(obj.offsetWidth) / 2;
  obj.style.left = "0";
  obj.style.opacity = "1";
}

slidingBtn.addEventListener("click", () =>{
  videoContainer.style.display = "none";
  slidingDivId.style.display = "flex";
  slidingBtn.style.display = "none";
  console.log(slidingDiv)
  let pos = window.scrollY;
//   for all elements in div, if offsetTop minus window.innerHeight / 2 
// is smaller than or equal to the number of pixels that the document is currently scrolled 
// vertically then run the slide function 
  for (let div of slidingDiv) { 
    let pixlesScrolled = div.offsetTop
    if (pixlesScrolled - (window.innerHeight / 2) <= (pos + 300)) {
      slide(div);
    }
  }
})











    