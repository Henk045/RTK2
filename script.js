window.addEventListener("scroll", function () {
    const topNavigation = document.querySelector(".topnav");
    const header = document.querySelector(".header");

    // if mobile, don't do this
    if (window.innerWidth < 768) {
        console.log("Mobile detected");
        return;
    }


    if (window.scrollY > header.offsetHeight) {
        topNavigation.classList.add("fixed");
        console.log("Thick latina")
    } else {
        topNavigation.classList.remove("fixed");
        console.log("Skinny latina")
    }
})



// when clicking on an image with class 'photo', make it 100% width, if it's already 100% width, remove it
document.querySelectorAll(".photo-frame").forEach(function (photoFrame) {
    photoFrame.addEventListener("click", function () {
        console.log("clicked on photo");
        if (photoFrame.classList.contains("full-width")) {
            photoFrame.classList.remove("full-width");
        } else {
            photoFrame.classList.add("full-width");
        }
    })
});
