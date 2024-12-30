let btnRedFlag = document.querySelector('.btn-red-flag')
let btnShare = document.querySelector('.btn-share')
let socialShare = document.querySelector('.social-share')
btnRedFlag.addEventListener('click', function(){
    btnRedFlag.classList.toggle('btn-grey')
})


btnShare.addEventListener('click', function(){
    socialShare.style.display =  socialShare.style.display==='none' ? 'flex' : 'none'
})

