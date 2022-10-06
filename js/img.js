const openLetter = document.querySelector('.imgcarta')
const articleLetter = document.querySelector('.section2__article')
const closeLetter = document.querySelector('.close')
const openVideo = document.getElementById('video')
const articleVideo = document.querySelector('.section2__articleVideo')
const closeVideo = document.getElementById('closeVideo')

openLetter.addEventListener('click', ()=>{
    articleLetter.classList.add('active')
    articleLetter.classList.remove('animate__fadeOutDown')
    articleLetter.classList.add('animate__fadeInDown')
})
closeLetter.addEventListener('click', ()=>{
    articleLetter.classList.remove('animate__fadeInDown')
    articleLetter.classList.add('animate__fadeOutDown')
})

openVideo.addEventListener('click', ()=>{
    articleVideo.classList.add('active')
    articleVideo.classList.remove('animate__fadeOutUp')
    articleVideo.classList.add('animate__fadeInUp')
})

closeVideo.addEventListener('click', ()=>{
    articleVideo.classList.remove('animate__fadeInUp')
    articleVideo.classList.add('animate__fadeOutUp')
})