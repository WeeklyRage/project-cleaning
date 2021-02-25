<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cleaningwp
 */

?>

	<footer>
   <div class="container">
      <div class="wrapper__footer">
         <div class="footer__nav">
            <div class="footer__nav__item">
               <h4 class="footer__nav__item_title">Хлопотное дело</h4>
               <input type="checkbox" name="" id="troublesome_checkbox">
               <label for="troublesome_checkbox" class="troublesome_label"></label>
               <ul class="footer__nav__list troublesome__list">
                  <li class="footer__nav__list-item"><a href="/" target="_blank">Главная</a></li>
                  <li class="footer__nav__list-item"><a href="" target="_blank">Преимущества</a></li>
                  <li class="footer__nav__list-item"><a href="" target="_blank">Стоимость услуг</a></li>
                  <li class="footer__nav__list-item"><a href="" target="_blank">Что входит в нашу уборку</a></li>
                  <li class="footer__nav__list-item"><a href="/reviews.html" target="_blank">Что говорят наши
                        клиенты</a></li>
                  <li class="footer__nav__list-item"><a href="" target="_blank">Наши Партнеры</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/contacts/calculator/" target="_blank">Заказать уборку</a></li>
               </ul>

            </div>
            <div class="footer__nav__item">
               <h4 class="footer__nav__item_title">Услуги</h4>
               <input type="checkbox" name="" id="services_checkbox">
               <label for="services_checkbox" class="services_label"></label>
               <ul class="footer__nav__list services__list">
                  <li class="footer__nav__list-item"><a href="http://cleaning/supporting-cleaning/" target="_blank">Поддеживающая уборка</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/general_cleaning/" target="_blank">Генеральная уборка</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/cleaning-after-renovation/" target="_blank">Уборка после ремонта</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/cleaning-carpets/" target="_blank">Химчистка ковров</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/washing-windows/" target="_blank">Мойка окон</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/cleaning-furniture/" target="_blank">Чистка мягкой мебели</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/additionaly/" target="_blank">Дезинфекция</a></li>
                  <li class="footer__nav__list-item"><a href="http://cleaning/additionaly/" target="_blank">Дополнительно</a></li>
               </ul>
            </div>
            <div class="contacts__footer">
               <h4 class="footer__nav__item_title">Контакты:</h4>
               <a href="tel:375296015531">+375(29) 601-55-31 A1</a>
               <a href="tel:375292615531">+375(29) 261-55-31 MTC</a>
               <div class="contacts__footer__messenger">
                 
                  <a href="" rel="nofollow">
                     <picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Messenger_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Messenger_black.png" alt="VB messenger"></picture>
                  </a>
                  <?php                                                                              
                     function ViberMobile() {           
                         return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
                     }  
                     $ViberNotMobile = !(ViberMobile());  
                  ?>
                  <a <?php if ($ViberNotMobile) {?>href="viber://chat?number=+375(29) 601-55-31"<?}else {?>href="viber://add?number=+375(29) 601-55-31"<?}?>  rel="nofollow">
                     <picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Viber_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Viber_black.png" rel="nofollow" alt="Viber"></picture>
                  </a>

                  <a href="tg://resolve?domain=@1638102672" rel="nofollow">
                     <picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Telegram_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Telegram_black.png" rel="nofollow" alt="Telegram"></picture>
                  </a>
                  <a href="" rel="nofollow">
                     <picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/WhatsApp_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/WhatsApp_black.png" rel="nofollow" alt="WhatsApp"></picture>
                  </a>
               </div>
               <p>
                  г. Минск<br />
                  ул. Пандемическая 20
               </p>
               <a href="mailto:info@cleanday.b" class="mail-footer" rel="nofollow">info@cleanday.by</a>
            </div>
            <div class="social__footer">
               <h4 class="footer__nav__item_title">Мы в социальныйх сетях</h4>
               <div class="social__footer__icon">
                  <a href="" rel="nofollow"><picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Instagram_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Instagram_black.png" alt="instagram"></picture></a>
                  <a href="" rel="nofollow"><picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Twitter_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Twitter_black.png" alt="twitter"></picture></a>
                  <a href="" rel="nofollow"><picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Facebook_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/Facebook_black.png" alt="facebook"></picture></a>
                  <a href="" rel="nofollow"><picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/social_icon/VK_black.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/social_icon/VK_black.png" alt="VK"></picture></a>
               </div>
            </div>
         </div>
         <div class="info__footer">
            <div class="details">
               ООО "Хлопотное дело". УНП 10009796, свидетельство выдано минским горисполкомом 17 августа 2016.
               Юридический адрес: Республика Беларусь, г. Минск, ул. Белорусская 41-9. Время приема заказа -
               круглосуточно. Режим работы офиса: 8:00 - 17:00
            </div>
            <a class="public__contract" rel="nofollow">Публичный договор
               <picture><source srcset="/wp-content/themes/cleaningwp/template/img/icon/download.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/icon/download.png" alt="download"></picture></a>
         </div>
      </div>

   </div>

 
</footer>

<?php wp_footer(); ?>
<script src="/wp-content/themes/cleaningwp/template/js/script.js"></script>




<script>
  
   
</script> 
<script>



   $( ".checkout__btn" ).click(function() {
      let fridge__ajax = document.querySelector('.check__list__add__service').innerText;
      let microwave__ajax = document.querySelector('.check__list__add__microwave').innerText.trim();
      let oven__ajax = document.querySelector('.check__list__add__oven').innerText.trim();
      let hood__ajax = document.querySelector('.check__list__add__hood').innerText.trim();
      let tableware__ajax = document.querySelector('.check__list__add__tableware').innerText.trim();
      let kitchen__cabinets__ajax = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
      
      let balcony__ajax = document.querySelector('.check__list__add__balcony').innerText.trim();
      let ironing__ajax = document.querySelector('.check__list__add__ironing').innerText.trim();
      let tray__ajax = document.querySelector('.check__list__add__tray').innerText.trim();
      let disinfection__ajax = document.querySelector('.check__list__add__disinfection').innerText.trim();
      let steam_cleaner__ajax = document.querySelector('.check__list__add__steam_cleaner').innerText.trim();

      let divanAjax = document.querySelector('.check__list__add__divan').innerText;
      let uglovoiDivanAjax = document.querySelector('.check__list__add__uglovoi-divan').innerText;
      let detskiyDivanAjax = document.querySelector('.check__list__add__detskiy-divan').innerText;
      let kresloAjax = document.querySelector('.check__list__add__kreslo').innerText;
      let stulAjax = document.querySelector('.check__list__add__stul').innerText;
      let matracAjax = document.querySelector('.check__list__add__matrac').innerText;
      let koverAjax = document.querySelector('.check__list__add__kover').innerText;
      let kovrolinAjax = document.querySelector('.check__list__add__kovrolin').innerText;
      let windowAjax = document.querySelector('.check__list__add__window').innerText;
      let panoramicWindowAjax = document.querySelector('.check__list__add__panoramic_window').innerText;
      let balconyWindowAjax = document.querySelector('.check__list__add__balcony_window').innerText;
      let roofWindowsAjax = document.querySelector('.check__list__add__roof_windows').innerText;

      console.log(divanAjax);
      console.log(uglovoiDivanAjax);
      console.log(detskiyDivanAjax);
      console.log(kresloAjax);
      console.log(stulAjax);
      console.log(matracAjax);
      console.log(koverAjax);
      console.log(kovrolinAjax);
      console.log(windowAjax);
      console.log(panoramicWindowAjax);
      console.log(balconyWindowAjax);
      console.log(roofWindowsAjax);

      let serive_type;
      if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
         serive_type = document.querySelector('.__select__title__type__cleaning').innerText;
      }
      else if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
         serive_type = document.querySelector('.__select__title__type__cleaning').innerText;
      }
      else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта") {
         serive_type = document.querySelector('.__select__title__type__cleaning').innerText;
      }
      let select__title__ajax = document.querySelector('.check__list__service').innerText;
      let data = document.querySelector('.__data').innerText ;
      let time = document.querySelector('.__time').innerText;
      let discounter_str = document.querySelector('.check__lest__discount').innerText;     
      let rooms;
      if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
         rooms = document.querySelector('.amount__room').innerText;
      }else if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
         rooms = document.querySelector('.amount').innerText;
      }else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта") {
         rooms = document.querySelector('.amount__renovation').innerText;   
      }
      let street = $('input[name = "street"]').val();
      let house__number = $('input[name = "house__number"]').val();
      let apartment__number = $('input[name = "apartment__number"]').val();
      let body__number = $('input[name = "body__number"]').val();
      let entrance__number = $('input[name = "entrance__number"]').val();
      let floor = $('input[name = "floor"]').val();
      let code = $('input[name = "code"]').val();
      let address_key = $('input[name = "address_key"]').val();
      let name = $('input[name = "name"]').val();
      let phone = $('input[name = "phone"]').val();
      let email = $('input[name = "email"]').val();
      let comments = $('textarea[name = "comments"]').val();
      let nal = document.getElementById('payment-method__radio__nal');
      let kartoy = document.getElementById('payment-method__radio__online');
      let price = document.querySelector('.payment__price').innerText; 
      let service__type__check__error = document.querySelector('.service__type').innerText;
      let type_payment;

      let service__list__check = document.querySelector('.service__list').innerText;
      let service__type__check = document.querySelector('.service__type').innerText;

      let fields = document.querySelectorAll('.field')
      let errors = document.querySelectorAll('.error')
      
     
      
      let verification_service__list; 
      let verification_time__text;
      let check__input__error;
      let verification;
      let verification__checkbox; 

      if (nal.checked) { 
        type_payment = "Наличными";
      } else if (kartoy.checked){ 
         type_payment = "Картой";
      }

      
      function error__service__list__check() {
         if (service__list__check == "Выберите услугу") {
            let service__list__check_error = document.querySelector('#service__list_error');
            service__list__check_error.style.color = "red";
            service__list__check_error.innerHTML = "Выберите услугу(уборка квартиры или уборка коттеджей)";
            verification_service__list = false;
         }else {
            let service__list__check_error = document.querySelector('#service__list_error');
            service__list__check_error.innerHTML = "";
            verification_service__list = true;
         }
         return verification_service__list;
      };
      
      

      
      function  error__time__text__check() {
         if (document.querySelector('.__time__text').innerText == "") {
            let time_error = document.querySelector('#time_error');
            time_error.style.color = "red";
            time_error.innerHTML = "Укажите время начала уборки";
            verification_time__text = false;
         }else {
            let time_error = document.querySelector('#time_error');
            time_error.innerHTML = "";
            verification_time__text = true;
         }
         return verification_time__text;
      };
      
      function error__check__input() {
      
         for (let i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
               let error = document.createElement('div');
               error.className = 'error';
               error.style.color = 'red';
               error.innerHTML = 'Поле не заполнено';
               let infoerror = document.querySelector('#error');
               infoerror.innerHTML = "Заполните все поля";
               fields[i].parentElement.insertBefore(error, fields[i]);
               check__input__error =  false;
            }
            else {
               infoerror = document.querySelector('#error');
               infoerror.innerHTML = "";
             
            }
            
         }
         for (let i = 0; i < errors.length; i++) {
               errors[i].remove();
         }
         return check__input__error;
      };
      
       
        
      
      function error__check__add_service() {
         
         if ( service__type__check__error =="Выберите тип уборки") 
         {
            let service__check__error = document.querySelector('#service__check__error');
            service__check__error.style.color = "red";
            service__check__error.innerHTML = "Выберите нужную Вам услугу";
            verification = false;
         }else {
             let service__check__error = document.querySelector('#service__check__error');
            service__check__error.style.color = "red";
            service__check__error.innerHTML = "";  
            verification = true; 
         }
         return verification;        
      };

      function error__check__checkbox() {
         let element = document.querySelector('input[name="checkbox"]');
         if (!element.checked) {
            let checkbox__error = document.querySelector('#checkbox__error');
            checkbox__error.style.color = "red";
            checkbox__error.innerHTML ="Подтвердите согласие с договором публичной оферты!";
            return false;
         }else {
            let checkbox__error = document.querySelector('#checkbox__error');
            checkbox__error.innerHTML ="";
            return true;
         }
         
      };

      if ( error__service__list__check() == false || error__time__text__check() == false || error__check__add_service() == false || error__check__input() == false ||   error__check__checkbox() == false) {
      }
      else {
        
         $.ajax ({
            type: "POST",
            url: "/wp-content/themes/cleaningwp/template/ajax.php",
            data: {name:name,  comments:comments, street:street, house__number:house__number, apartment__number:apartment__number,  body__number:body__number, entrance__number:entrance__number, floor:floor, code:code, address_key:address_key, phone:phone, email:email, price:price, type_payment:type_payment, fridge__ajax:fridge__ajax, microwave__ajax:microwave__ajax, oven__ajax:oven__ajax, hood__ajax:hood__ajax, tableware__ajax:tableware__ajax, kitchen__cabinets__ajax:kitchen__cabinets__ajax,  balcony__ajax:balcony__ajax, ironing__ajax:ironing__ajax, tray__ajax:tray__ajax,  disinfection__ajax:disinfection__ajax, steam_cleaner__ajax:steam_cleaner__ajax, serive_type:serive_type, select__title__ajax:select__title__ajax, data:data, time:time, discounter_str:discounter_str, rooms:rooms, divanAjax:divanAjax, uglovoiDivanAjax:uglovoiDivanAjax, detskiyDivanAjax:detskiyDivanAjax, kresloAjax:kresloAjax, stulAjax:stulAjax, matracAjax:matracAjax, koverAjax:koverAjax, kovrolinAjax:kovrolinAjax, windowAjax:windowAjax, panoramicWindowAjax:panoramicWindowAjax, balconyWindowAjax:balconyWindowAjax,roofWindowsAjax:roofWindowsAjax},
            success: function(result) {
               console.log(result);
               console.log(result[1]);

              
               let modalSuccess = document.querySelector('.modal__success.success-modal');
 
               modalSuccess.classList.add('in');
                   

                  document.querySelector('.service__success').innerHTML = "Услуга:" + " " + select__title__ajax;
                  document.querySelector('.service__type__success').innerHTML = "Тип услуги:" + " " + serive_type;
                  document.querySelector('.rooms_place').innerHTML = rooms;
                  document.querySelector('.data__success').innerHTML = "Дата уборки:" + " " + data;
                  document.querySelector('.time__success').innerHTML = time;


                

                  if (fridge__ajax != "") {
                     document.querySelector('.fridge__ajax').innerHTML = fridge__ajax
                  }
                  
                  if (microwave__ajax  != "") {
                     document.querySelector('.microwave__ajax').innerHTML = microwave__ajax 
                  }
                  if (oven__ajax != "") {
                     document.querySelector('.oven__ajax').innerHTML = oven__ajax    
                  }
                  if (hood__ajax != "") {
                     document.querySelector('.hood__ajax').innerHTML = hood__ajax 
                  }
                  if (tableware__ajax != "") {
                     document.querySelector('.tableware__ajax').innerHTML = tableware__ajax 
                  }
                  if (kitchen__cabinets__ajax != "") {
                      document.querySelector('.kitchen__cabinets__ajax').innerHTML = kitchen__cabinets__ajax   
                  }
                  if (window__ajax != "") {
                     document.querySelector('.window__ajax').innerHTML = window__ajax
                  }
                  if (balcony__ajax != "") {
                     document.querySelector('.balcony__ajax').innerHTML = balcony__ajax
                  }
                  if (ironing__ajax != "") {
                     document.querySelector('.ironing__ajax').innerHTML = ironing__ajax 
                  }
                  if (tray__ajax != "") {
                     document.querySelector('.tray__ajax').innerHTML = tray__ajax     
                  }
                  if (disinfection__ajax != "") {
                      document.querySelector('.disinfection__ajax').innerHTML = disinfection__ajax  
                  }
                  if (steam_cleaner__ajax != "") {
                     document.querySelector('.steam_cleaner__ajax').innerHTML = steam_cleaner__ajax
                  }
                  if (divanAjax != ""){
                     document.querySelector('.divanAjax').innerHTML = divanAjax;
                  }
                  if (uglovoiDivanAjax != ""){
                     document.querySelector('.uglovoiDivanAjax').innerHTML = uglovoiDivanAjax;
                  }
                  if (detskiyDivanAjax != ""){
                     document.querySelector('.detskiyDivanAjax').innerHTML = detskiyDivanAjax;
                  }
                  if (kresloAjax != ""){
                     document.querySelector('.kresloAjax').innerHTML = kresloAjax;
                  }
                  if (stulAjax != ""){
                     document.querySelector('.stulAjax').innerHTML = stulAjax;
                  }
                  if (matracAjax != ""){
                     document.querySelector('.matracAjax').innerHTML = matracAjax;
                  }
                  if (koverAjax != ""){
                     document.querySelector('.koverAjax').innerHTML = koverAjax;
                  }
                  if (kovrolinAjax != ""){
                     document.querySelector('.kovrolinAjax').innerHTML = kovrolinAjax;
                  }
                  if (windowAjax != ""){
                     document.querySelector('.windowAjax').innerHTML = windowAjax;
                  }
                  if (panoramicWindowAjax != ""){
                     document.querySelector('.panoramicWindowAjax').innerHTML = panoramicWindowAjax;
                  }
                  if ( balconyWindowAjax != ""){
                     document.querySelector('.balconyWindowAjax').innerHTML = balconyWindowAjax;
                  }
                  if (roofWindowsAjax != ""){
                     document.querySelector('.roofWindowsAjax').innerHTML = roofWindowsAjax;
                  }

                  document.querySelector('.type_payment').innerHTML = "Способ оплаты:" + " " + type_payment
                  if (discounter_str != "") {
                     document.querySelector('.discount__success').innerHTML = "Скидка:" + " " + discounter_str ;
                  }
                  
                  document.querySelector('.price__success').innerHTML = "Итого к оплате:" + " " + price;

               let modalClose = document.querySelector('.success-modal__close');

               modalClose.addEventListener('click', function() {
                  modalSuccess.classList.remove('in');

                  // setInterval(function() {
                  //       location.reload(true);
                  //   }, 500);
                  
               });

               

               

            }
        });
      }
      
   });

   
(function($){

var files; // переменная. будет содержать данные файлов

// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
   files = this.files;
});



// обработка и отправка AJAX запроса при клике на кнопку upload_files
$('.uploads-img').on( 'click', function( event ){
  
      var type   = ['image/jpg','image/jpeg','image/png'];


   
   event.stopPropagation(); // остановка всех текущих JS событий
   event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

   // если files пустой, выведем ошибку
   if( typeof files == 'undefined' ) {
      document.querySelector('.error-img').innerHTML = "Пожалуйста, выберите изображение!";
      return;
   }

   // создадим данные файлов в подходящем для отправки формате
   var data = new FormData();
   $.each( files, function( key, value ){
      data.append( key, value );
   });

   // добавим переменную идентификатор запроса
   data.append( 'my_file_upload', 1 );

   var ext=$('input[type=file]').val().split('.').pop(); //определяем формат файла


   var oSize = document.getElementById('uplouds_img').files[0]
   
   var errorImg = document.querySelector('.error-img');
   
   if($.inArray(ext, ['png','jpg','jpeg']) == -1) {   
       
      errorImg.innerHTML = "Неверный тип файла. Выберите изображение с форматом: PNG, JPG, JPEG";
   }
   else if (oSize.size > 1024*1024) {

      errorImg.innerHTML = "Размер файла превышает 2МБ";

   }else {

   errorImg.innerHTML = ""; //Если есть ранее выведенные ошибки, то чистим их
   // AJAX запрос
   $.ajax({
      url         : "/wp-content/themes/cleaningwp/template/uploads_img.php",
      type        : 'POST',
      data        : data,
      cache       : false,
      dataType    : 'json',
      // отключаем обработку передаваемых данных, пусть передаются как есть
      processData : false,
      // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
      contentType : false,
      // функция успешного ответа сервера
      success     : function( respond, status, jqXHR){
      
         // console.log(respond);

         
         
         if( typeof respond.error === 'undefined' ){
            // файлы загружены, делаем что-нибудь

            // покажем пути к загруженным файлам в блок '.ajax-reply'
            
            var files_path = respond.files;
            var html = '';
            $.each( files_path, function( key, val ){
                html += val;
            } )

            // $('.ajax-reply').html(html);
            var a = html.split(":")[1];
            var b = a.split("\\")[9];

           
            $('.img-ajax').html(b);
            
            // console.log(b);
         }
         // error
         else {
            console.log('ОШИБКА: ' + respond.error );
         }
      },
      // функция ошибки ответа сервера
      error: function( jqXHR, status, errorThrown ){
         console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
      }

   });

   }
});


})(jQuery)
</script>
<script>


   $( ".btn__reviews" ).click(function() {
      
      let name = $('input[name = "name__reviews"]').val();
      let lastname = $('input[name = "lastname__reviews"]').val();
      let comments = $('textarea[name = "comment__reviews"]').val();
      let fileimg = document.querySelector('.img-ajax').innerHTML;
      function star () {
      
         let star = $('input[name = "simple-raiting"]');
         let starValue;
            
         for (let i = 0; i < star.length; i++) {
            if (star[i].type =="radio" && star[i].checked) {
                  starValue = (star[i].value);
            }
                   
         }

         return  starValue;
      }
      
      let starAjax = star ();
         console.log(starAjax);
      

         let name__reviews = document.getElementById('name__reviews').value;
         let lastname__reviews = document.getElementById('lastname__reviews').value;
         let comment__reviews = document.getElementById('comment__reviews').value;
        



         if (fileimg == "") {
            document.querySelector('.error-img').innerHTML = "Пожалуйста, выберите и загрузите изображение!";   

         }else if (starAjax == undefined) {
            document.querySelector('.error-score').innerHTML ="Укажите оценку";
            return;
         }else if (name__reviews =="") {
            document.querySelector('.error-input').innerHTML = "Пожалуйста, заполните выделенное поле!";
            document.getElementById('name__reviews').style.border = "1px solid red";
            document.querySelector('.error-score').innerHTML ="";
         }else if (lastname__reviews == "") {
            document.querySelector('.error-input').innerHTML = "Пожалуйста, заполните выделенное поле!";
            document.getElementById('lastname__reviews').style.border = "1px solid red";
            document.getElementById('name__reviews').style.border = "1px solid #dfdfdf";
            document.getElementById('comment__reviews').style.border = "1px solid #dfdfdf";
         }else if (comment__reviews == "") { 
            document.querySelector('.error-input').innerHTML = "Пожалуйста, заполните выделенное поле!";
            document.getElementById('comment__reviews').style.border = "1px solid red";
            document.getElementById('name__reviews').style.border = "1px solid #dfdfdf";
            document.getElementById('lastname__reviews').style.border = "1px solid #dfdfdf";
         }else {
            document.querySelector('.error-score').innerHTML ="";
            document.querySelector('.error-input').innerHTML = "";
            document.getElementById('comment__reviews').style.border = "1px solid #dfdfdf";
            document.getElementById('name__reviews').style.border = "1px solid #dfdfdf";
            document.getElementById('lastname__reviews').style.border = "1px solid #dfdfdf";
            $.ajax ({
               type: "POST",
               url: "/wp-content/themes/cleaningwp/template/reviews_ajax.php",
               data: {name:name, lastname:lastname, comments:comments, star:starAjax, fileimg:fileimg },
               success: function(result) {
                 
                  console.log(result);
                  document.querySelector('.img-ajax').innerHTML = "";

                  document.querySelector('.title-modal__reviews').innerHTML = "Благодарим Вас за оставленный отзыв!";
                  document.querySelector('.success-modal__discription').style.display = "none";
                  document.querySelector('.btn__reviews').style.display = "none";
                  

                  let modalClose = document.querySelector('.success-modal__close');
                  modalClose.addEventListener('click', function() {
                     modalSuccess.classList.remove('in');

                     window.location.reload()
                  });
                  
               }
            });
         }
      
   });

</script>
</body>

</html>
