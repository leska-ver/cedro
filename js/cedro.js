document.addEventListener('DOMContentLoaded', function () {

  //Клик БУРГЕР burger
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#menu').classList.toggle('is-active')
    })
  })

  $(document).ready(function () {
    $('#burger').click(function () {
      $(this).toggleClass('open');
    })
  })



  // Табы-Профиль Цепляем target
  const allTabBtns = document.querySelectorAll('.js-tabs-btn');

  allTabBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {


      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      allTabBtns.forEach(function (el) {
        el.classList.remove('is-active');
      });

      this.classList.add('is-active');
    })
  })



  //Маска телефона//
  var selector = document.querySelector("input[type='tel']"); //Всем input с атрибутом type со значением tel
  var im = new Inputmask("+7 (999)-999-99-99"); //Задали внешний вид маски

  //С помощью метода .mask инициализировали этот плагин и натравили его на selector-ы input[type='tel']
  im.mask(selector);

  //Валидация телефона//
  //Первый аргумент передаём селектор т.е html с классом form
  new JustValidate('.profile__form', {
    //Второй аргумент передаём его(form) правила
    rules: {
      name: { //data-validate-field="name"
        required: true, //Это означает поле обязательное для заполнение
        minLength: 2,
        maxLenght: 30
      },
      tel: { //data-validate-rules="phone"
        required: true, //Это означает поле обязательное для заполнение
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
      mail: { //data-validate-field="mail"
        required: true, //Это означает поле обязательное для заполнение
        email: true //Проверяет сама себя на валидность, например @ на месте
      },
      login: {
        required: true,
        minLenght: 2,
        maxLength: 10
      },
      instagram: {
        required: true,
        minLenght: 8,
        maxLength: 40
      },
      address: {
        required: true,
        minLenght: 8,
        maxLength: 240
      },
      oldpassword: {
        required: true,
        minLenght: 8,
        maxLength: 12
      },
      newpassword: {
        required: true,
        minLenght: 8,
        maxLength: 12
      }
    },
    //От проверяющего дополнен код
    messages: { //Извещает об ошибке
      tel: {
        required: 'Укажите ваш телефон'
      },
      name: 'Это обязательное поле',
      mail: 'Укажите ваш e-mail',
      login: 'Укажите ваш логин',
      instagram: 'Укажите ваш профиль в инстаграм',
      address: 'Укажите ваш адрес',
      oldpassword: 'Введите старый пароль',
      newpassword: 'Введите новый пароль',
    },
    colorWrong: '#FF5C00' //цвет сообщений валидации(ошибки фразы) и бордера
  });



  // console.log('showPassword'); проверка для браузера
  //Скрыть пароль или показать - profile__form
  function showPassword() {
    const btn = document.querySelectorAll('.profile__password-btn');


    for (i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', (e) => {
        event.target.parentElement.classList.toggle('active');

        const input = event.target.parentElement.parentElement.querySelector('.profile__input_js');

        if (input.getAttribute('type') === 'password') {
          input.setAttribute('type', 'text');
        } else {
          input.setAttribute('type', 'password');
        }
      })
    }
  }
  showPassword();



  //Тренды сезона slider
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,

    //Бесконечное листание страниц
    //speed: 2000, Интервал ожидания

    // autoplay: {
      //delay: 3000,Интервал ожидания
        // disableOnInteraction: false,      
    // }, 

    pagination: {
      el: ".slider__section .slider__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev"
    },
  
    breakpoints: {
      141: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 8
      },

      441: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 8
      },

      550: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 15
      },

      700: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },

      900: {
        slidesPerView: 4,
        grid: {
          rows: 1
        },
        spaceBetween: 25
      },
  
      1200: {
        slidesPerView: 5,
        grid: {
          rows: 1
        },
        spaceBetween: 30
      }
    },
  
    a11y: false
  
    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
  


  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function () {
    $('a[href^="#"]').click(function () {
      let target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
      return false;
    })
  })





});