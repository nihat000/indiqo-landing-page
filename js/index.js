let carousel = {
   currentDot: document.querySelector("#home .dot-1"),
   imgArr: ['img/dress-1.png', 'img/dress-2.png', 'img/dress-3.png'],
}



document.querySelectorAll("#home .dot").forEach(el => {
   el.addEventListener('click', changeDot);
})

function changeDot(e) {
   carousel.currentDot.classList.toggle('current-dot');
   carousel.currentDot = e.target;
   carousel.currentDot.classList.toggle('current-dot');

   document.querySelector("#home .carousel img").src = carousel.imgArr[carousel.currentDot.dataset.id - 1];

}