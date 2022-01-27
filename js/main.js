$(document).ready(function(){
    $('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});


jQuery(document).ready(function() {

	$(window).scroll(function() {
	  $(".block").each(function() {
	    var elPos = $(this).offset().top;
	    var topOfWindow = $(window).scrollTop();
	    if (elPos < topOfWindow + 500) {
	      $(this).addClass("fadeInUp");
	    }
	  });
	});
})









