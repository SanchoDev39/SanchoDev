function displayRandomImage() {
    const randomNumber = Math.floor(Math.random() * 67) + 1;
    const imageSource = `/images/mone${randomNumber}.webp`;
    return imageSource;
}

const photoImage = document.getElementById("photoImage");
let currentSlide = 0;
function showSlide() {
    photoImage.src = displayRandomImage();
}

setInterval(showSlide, 3000);