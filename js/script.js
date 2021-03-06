// import 'jquery';


'use strict';


window.addEventListener('DOMContentLoaded', function() { 

// Get the current year for the copyright
document.querySelector('#year').textContent = new Date().getFullYear();




// var getContainerWidth = function(){
//   $('span').each(function(){
//      $(this).html($(this).parent().innerWidth());
//  });
// }

// getContainerWidth();
// $(window).resize(getContainerWidth);

// $(document).ready(function(){
//   $('.header').height($(window).height());})
  


// const forms = document.querySelectorAll('form');
// const message = {
//     loading: 'img/spinner.svg',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {
//     bindPostData(item);
// });

// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });
//     return await res.json();
// };

// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//             display: block;
//             margin: 0 auto;
//         `;
//         form.insertAdjacentElement('afterend', statusMessage);
    
//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

//         postData('http://localhost:3000/requests', json)
//         .then(data => {
//             console.log(data);
//             showThanksModal(message.success);
//             statusMessage.remove();
//         }).catch(() => {
//             showThanksModal(message.failure);
//         }).finally(() => {
//             form.reset();
//         });
//     });
// }

// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.modal__dialog');

//     prevModalDialog.classList.add('hide');
//     openModal();

//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('modal__dialog');
//     thanksModal.innerHTML = `
//         <div class="modal__content">
//             <div class="modal__close" data-close>×</div>
//             <div class="modal__title">${message}</div>
//         </div>
//     `;
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 4000);
// }


// };



// // Configure Slider
// $('.carousel').carousel({
//   interval: 6000,
//   pause: 'hover'
// });

// // Lightbox Init
// $(document).on('click', '[data-toggle="lightbox"]', function (event) {
//   event.preventDefault();
//   $(this).ekkoLightbox();
// });


// Slider

// функция, добавляющая индикаторы к слайдеру

  const addIndicators = function () {
    const indicatorsContainer = document.createElement('ol');
    indicatorsContainer.classList.add('slider__indicators');
    for (let i = 0; i < slides.length; i +=1) {
      const sliderIndicatorsItem = document.createElement('li');
      sliderIndicatorsItem.classList.add('dot');
      if (i === 0) {
        sliderIndicatorsItem.classList.add('active');
      }
      sliderIndicatorsItem.setAttribute("data-slide-to", i+1);
      indicatorsContainer.appendChild(sliderIndicatorsItem);
    }
    wrapper.appendChild(indicatorsContainer);
  };


  let slideIndex = 1;

  const slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.slider-control-prev'),
        next = document.querySelector('.slider-control-next'),
        wrapper = document.querySelector('.wrapper');

  function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(item => {
      item.classList.add('hide'); 
      item.classList.remove('show', 'fade');
    });

    for (let i = 0; i < dots.length; i += 1) {
      dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].classList.add('show', 'fade');
    slides[slideIndex - 1].classList.remove('hide');
    dots[slideIndex - 1].classList.add('active');
  }

  function changeSlide (n) {      
      slideIndex += n;
      showSlides(slideIndex);
  }

  prev.addEventListener('click', () => {
      changeSlide(-1);
  });

  next.addEventListener('click', () => {
      changeSlide(1);
  });

  const showSlideByIndex = (index) => {
    slideIndex = index;
    showSlides(slideIndex);
  }

  addIndicators();

  const dots = wrapper.querySelectorAll('.dot');

   dots.forEach(item => {
    const dataAtribute = item.dataset.slideTo;
    item.addEventListener('click', () => {
      showSlideByIndex(dataAtribute);
    });
  });

  showSlides(slideIndex);

  setInterval(() => changeSlide(1), 6000);

});