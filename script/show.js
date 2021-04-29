let contentContainer = document.querySelector(".content-container");

// sidebarData 
let sidebarData = [{
  vidLink:"../images-and-videos/Video.mp4",
  imgLink: "../images-and-videos/thumbnail.jpg",
  title: "Class 10 Human Eye",
  author: "Colt Steele",
  dropdownTitle: "How Electromagnets work"
},
{
  vidLink:"../images-and-videos/Video.mp4",
  imgLink: "../images-and-videos/thumbnail.jpg",
  title: "Class 10 Electricity",
  author: "John",
  dropdownTitle: "DC Motor"

},
{
  vidLink:"../images-and-videos/Video.mp4",
  imgLink: "../images-and-videos/thumbnail.jpg",
  title: "How Electromagnets work",
  author: "Jay",
  dropdownTitle: "AC Generator"
}]

// Loding sidebar dynamically
let newData = sidebarData.map(dynamicInnerData)
window.onload = () => {
contentContainer.innerHTML = newData.join("");
}

function dynamicInnerData(arr){
    return `<a href="${arr.vidLink}"><div class="inner">
              <div class="img-container">
                <img class="image" src="${arr.imgLink}" alt="">
              </div>
              <div class="inner-text">
              <h4 class="sidebar-contentTitle">${arr.title}</h4>
              <p class="sub-heading"><i></i>${arr.author}</p>
              </div>
            </div></a>`
  }



