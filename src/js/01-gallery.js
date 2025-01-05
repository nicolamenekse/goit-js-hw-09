import { images } from "../data/images"

// Kullanılacak kısmın import edilmesi
// import SimpleLightbox from "simplelightbox";
// // Ek stillerin eklenmesi
// import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery")

const galleryRoll = images.map(({ preview, original, description }) => {

    return `<li class="gallery-item">
    <a class="gallery-link" href="${original}"> 
    <img class="gallery-image" src="${preview}" alt="${description}"/>
    </a>
    </li>`
}).join("")

galleryContainer.innerHTML = galleryRoll

const galleryLinks = document.querySelectorAll(".gallery-link")
galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
    })
})


new SimpleLightbox('.gallery a');


