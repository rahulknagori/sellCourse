// Note: The dropdown is not working yet


let notificationDropdown = document.querySelector(".notification-icon");
let dropdownContent = document.querySelector(".dropdown-content");
let mainBox = document.querySelector(".my-videos")

notificationDropdown.addEventListener("click", function(){
    if(dropdownContent.style.display === "block"){
        dropdownContent.style.display = "none";
    } else{
        dropdownContent.style.display = "block";
        mainBox.style.zIndex = "-1";
    }
})