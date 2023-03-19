const images = [

    "./BannerImages/img4.jpg",
    "./BannerImages/img5.jpg",
    "./BannerImages/img6.jpg",
    "./BannerImages/img7.jpg",
    "./BannerImages/img8.jpg",
    "./BannerImages/img9.jpg",
    "./BannerImages/img10.jpg",
    "./BannerImages/img12.jpg",
    "./BannerImages/img13.jpg",
    "./BannerImages/img14.jpg"
];
let currentImage = 0;
const bannerImage = document.querySelector(".banner-image")

setInterval(() =>{
    bannerImage.src = images[currentImage]
    currentImage++
    if (currentImage >= 10) {
        currentImage = 0
    }
}, 2000)

   
   
   
   
   
   
   
    /*for (let index = 0; index <= bannerImages.length; index++) {
    const element = bannerImages[index];
    banner.src = element
    }*/
