const imgs = document.querySelectorAll(".header-slider ul img")
const prev_btn = document.querySelector(".Control_prev")
const next_btn = document.querySelector(".Control_next")

let n = 0;

function chnageSlide(){
    for (let i = 0; i < imgs.length; i++) {
       imgs[i].style.display = 'none'        
    }
    imgs[n].style.display = 'block'
}

chnageSlide()

prev_btn.addEventListener("click", (e) =>{
    if (n > 0){
        n--
    }else{
        n = imgs.length - 1
    }
    chnageSlide()
})

next_btn.addEventListener("click", (e) =>{
    if (n < imgs.length -1){
        n++
    }else{
        n = 0
    }
    chnageSlide()
})


// Scroll  bar for product slider 

const scrollContainer = document.querySelectorAll(".products");


scrollContainer.forEach(item => {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
});