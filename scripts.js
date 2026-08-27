const images = document.querySelectorAll(".carousel-images img");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;

let imagesToShow = 3;

function updateImagesToShow() {
    if (window.innerWidth <= 600) {
        imagesToShow = 1;
    } else if (window.innerWidth <= 900) {
        imagesToShow = 2;
    } else {
        imagesToShow = 3;
    }
}

function showImages() {

    images.forEach((image, index) => {

        if (index >= currentIndex + imagesToShow || index < currentIndex) {
            image.style.display = "none";
        } else {
            image.style.display = "block";
        }

    });
}

window.addEventListener("resize", () => {
    updateImagesToShow();
    showImages();

});

function nextImage() {
    currentIndex = currentIndex + 1

    if (currentIndex === images.length - imagesToShow + 1) {
        currentIndex = 0
    }

    showImages();
}

function prevImage() {
    currentIndex = currentIndex - 1
    
    if (currentIndex < 0) {
        currentIndex = images.length - imagesToShow;
    }

    showImages();
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);


// Set the initial state when the page loads
updateImagesToShow();
showImages();