let plus = document.querySelectorAll('.questions__block-bottom');
let closeQa = document.querySelectorAll('.questions__block-top')


plus.forEach(elem=>{
    elem.addEventListener('click',function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';//стрелка
        elem.nextElementSibling.style.display  = elem.nextElementSibling.style.display === 'none' ? 'block' : 'none'; //стрелка
        console.log(elem.closest('.questions__block').querySelector('.questions__block-answer').style.display)
        elem.closest('.questions__block').querySelector('.questions__block-answer').style.display = elem.closest('.questions__block').querySelector('.questions__block-answer').style.display ==='block' ? 'none' : 'block';
       
    })
    }
)

closeQa.forEach(elem=>{
    elem.addEventListener('click',function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.style.display= elem.previousElementSibling.style.display=== 'block' ? 'none' : 'block';
        elem.closest('.questions__block').querySelector('.questions__block-answer').style.display = elem.closest('.questions__block').querySelector('.questions__block-answer').style.display ==='none' ? 'block' : 'none';
        
        
       
    })
    }
)