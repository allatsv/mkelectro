let btn = document.querySelectorAll(".filter")
let popap = document.querySelector(".popap-filter")

btn.forEach(function(elem){
    elem.addEventListener('click',function(){
        popap.classList.toggle('popap-display')
    })
})