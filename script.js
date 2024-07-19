
var displayImg = document.getElementById("gallery-img");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

// Getting the  images
var Images = document.querySelectorAll(".gallery-images img");

// Initializing the index of the current displayed image
var currentImageIndex = 0;

//To display the selected image
function displayImage(imgSrc) {
    displayImg.src = imgSrc;
    var currentImageIndex = -1;
    for (var i = 0; i < Images.length; i++) {
        if (Images[i].src === imgSrc) {
            currentImageIndex = i;
            break;
        }
    }
}

// Event listener for clicking on images
for (var i = 0; i < Images.length; i++) {
    Images[i].onclick = function () {
        displayImage(this.src);
    };
}


// Event listener for clicking on previous button
leftArrow.onclick = function () {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = Images.length - 1;
    }
    displayImage(Images[currentImageIndex].src);
};

// Event listener for clicking on next button
rightArrow.onclick = function () {
    currentImageIndex++;
    if (currentImageIndex >= Images.length) {
        currentImageIndex = 0;
    }
    displayImage(Images[currentImageIndex].src);
};


// Event listener for clicking on exit button
var exit_Btn = document.getElementById("exitBtn");
exit_Btn.onclick = function() {
    if (confirm("Are you sure you want to exit?")) {
        window.close(); 

    }
}
