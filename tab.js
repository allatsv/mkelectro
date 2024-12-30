window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.content__product-nav-btn'),
    header = document.querySelector('.content__product-nav'),
    tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent(x) {
        for (let i = x; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        }
      }
      
      hideTabContent(1);


      function showTabContent(y) {
        if (tabContent[y].classList.contains('hide')) {
          tabContent[y].classList.remove('hide');
          tabContent[y].classList.add('show');
        }
      }


      header.addEventListener('click', function(event) {
        let target = event.target;
        
        if (target && target.classList.contains('content__product-nav-btn')) {
          
          for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
              hideTabContent(0);
              showTabContent(i);
              break;
            }
          }
        }
      });
});