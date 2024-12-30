let watchAll = document.querySelector('.watchAll')
let hiddenAll = document.querySelector('.hiddenAll')
let contentHidden = document.querySelector('.content__availability-hidden')
let contentChoice = document.querySelector('.content__optionally-choice')
let companyName = document.querySelector('.company__name')

watchAll.addEventListener('click', function(){
    watchAll.style.display = watchAll.style.display === 'none' ? 'block' : 'none'
    hiddenAll.style.display  = 'block'
    contentHidden.style.display = 'block'
    contentChoice.style.display = 'none'
    companyName.style.display = 'none'
    contentHidden.style.marginBottom  = 0 + "px"
})

hiddenAll.addEventListener('click', function(){
    hiddenAll.style.display = hiddenAll.style.display === 'none' ? 'block' : 'none'
    watchAll.style.display =  'block'
    contentHidden.style.display  = 'none'
    contentHidden.style.marginBottom  = 18 + "px"
    contentChoice.style.display = 'flex'
    companyName.style.display = 'block'
})