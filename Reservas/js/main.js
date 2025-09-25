
(function ($) {
  "use strict";

  var NochesContadas;
  var NochesContadas2;
  var NochesContadas3;
  var NochesContadas4;
  var totalT;
  var totalT2;
  var totalT3;
  var totalT4;
  var NumeroHabitaciones;
  var NumeroHabitaciones2;
  var NumeroHabitaciones3;
  var NumeroHabitaciones4;


  // fragmento de jQuery para realizar el cuadro de dialogo

  $(document).ready(function () {

    // mostrar u ocultar el cuadro de dialogo 

    function showDialog(id) {

      //encontrar el dialogo y mostrarlo

      var dialog = $('#' + id),
        card = dialog.find('.dialog-card');

      dialog.fadeIn();

      // lo centramos en la pantalla

      card.css({
        'margin-top': -card.outerHeight() / 2
      });


     let entrad= $("#entrada").val();
     let salid= $("#salida").val();

     
    var per = document.getElementsByName('Npersonas');

    for (var i = 0; i < per.length; i++) {

      if (per[i].checked) {
        var persona = i;
          
      }
    }
    let n = persona+1;
    $('#numeroNoches').html(NochesContadas);
    $('#numeroHabitaciones').html(NumeroHabitaciones);
    $('#totalPagar').html(totalT);
     $('#ingresoAdulto').html(n);
     $("#notaEntrada").html(entrad);
     $("#notaSalida").html(salid);

    }

    function hideAllDialogs() {

      // oculta dialogos visibles metodo jquery
      $('.dialog-overlay').fadeOut();

    }


    $('.dialog-confirm-button, .dialog-reject-button').on('click', function () {

      // Ocultamos el cuadro de dialogo cuando presionamos el boton
      hideAllDialogs();

    });

    $('.dialog-overlay').on('click', function (e) {

      if (e.target == this) {
        // ocultamos el cuadro cuando es clickeado directamente
        hideAllDialogs();
      }


    });

    $(document).keyup(function (e) {

      if (e.keyCode == 27) {
        // ocultamos cuando es presionado la tecla escape

        hideAllDialogs();
      }

    });


    // verificamos que cuadro de dialogo se esta presionando 
    // y mostramos el correcto

    $('.aniadirButton').on('click', function () {

      // toma el contenido de  "data-show-dialog" attribute
      var toShow = $(this).data('show-dialog');

      showDialog(toShow);
    });
  });


  //----------------------------------------------------------------------------------------2
  $(document).ready(function () {
    
    function showDialog2(id) {
      var dialog = $('#' + id),
        card = dialog.find('.dialog-card');

      dialog.fadeIn();

      card.css({
        'margin-top': -card.outerHeight() / 2
      });


     let entrad= $("#entrada2").val();
     let salid= $("#salida2").val();

     
    var per = document.getElementsByName('Npersonas2');

    for (var i = 0; i < per.length; i++) {

      if (per[i].checked) {
        var persona = i;
          
      }
    }
    let n = persona+1;
    $('#numeroNoches2').html(NochesContadas2);
    $('#numeroHabitaciones2').html(NumeroHabitaciones2);
    $('#totalPagar2').html(totalT2);
     $('#ingresoAdulto2').html(n);
     $("#notaEntrada2").html(entrad);
     $("#notaSalida2").html(salid);

    }

    function hideAllDialogs() {

      // oculta dialogos visibles metodo jquery
      $('.dialog-overlay').fadeOut();

    }


    $('.dialog-confirm-button, .dialog-reject-button').on('click', function () {

      // Ocultamos el cuadro de dialogo cuando presionamos el boton
      hideAllDialogs();

    });

    $('.dialog-overlay').on('click', function (e) {

      if (e.target == this) {
        // ocultamos el cuadro cuando es clickeado directamente
        hideAllDialogs();
      }


    });

    $(document).keyup(function (e) {

      if (e.keyCode == 27) {
        // ocultamos cuando es presionado la tecla escape

        hideAllDialogs();
      }

    });


    // verificamos que cuadro de dialogo se esta presionando 
    // y mostramos el correcto

    $('.aniadirButton2').on('click', function () {

      // toma el contenido de  "data-show-dialog" attribute
      var toShow = $(this).data('show-dialog');

      showDialog2(toShow);
    });
  });

//----------------------------------------------------------------------------------------3
$(document).ready(function () {
    
  function showDialog3(id) {
    var dialog = $('#' + id),
      card = dialog.find('.dialog-card');

    dialog.fadeIn();

    card.css({
      'margin-top': -card.outerHeight() / 2
    });


   let entrad= $("#entrada3").val();
   let salid= $("#salida3").val();

   
  var per = document.getElementsByName('Npersonas3');

  for (var i = 0; i < per.length; i++) {

    if (per[i].checked) {
      var persona = i;
        
    }
  }
  let n = persona+1;
  $('#numeroNoches3').html(NochesContadas3);
  $('#numeroHabitaciones3').html(NumeroHabitaciones3);
  $('#totalPagar3').html(totalT3);
   $('#ingresoAdulto3').html(n);
   $("#notaEntrada3").html(entrad);
   $("#notaSalida3").html(salid);

  }

  function hideAllDialogs() {

    // oculta dialogos visibles metodo jquery
    $('.dialog-overlay').fadeOut();

  }


  $('.dialog-confirm-button, .dialog-reject-button').on('click', function () {

    // Ocultamos el cuadro de dialogo cuando presionamos el boton
    hideAllDialogs();

  });

  $('.dialog-overlay').on('click', function (e) {

    if (e.target == this) {
      // ocultamos el cuadro cuando es clickeado directamente
      hideAllDialogs();
    }


  });

  $(document).keyup(function (e) {

    if (e.keyCode == 27) {
      // ocultamos cuando es presionado la tecla escape

      hideAllDialogs();
    }

  });


  // verificamos que cuadro de dialogo se esta presionando 
  // y mostramos el correcto

  $('.aniadirButton3').on('click', function () {

    // toma el contenido de  "data-show-dialog" attribute
    var toShow = $(this).data('show-dialog');

    showDialog3(toShow);
  });
});

//----------------------------------------------------------------------------------------4
$(document).ready(function () {
    
  function showDialog4(id) {
    var dialog = $('#' + id),
      card = dialog.find('.dialog-card');

    dialog.fadeIn();

    card.css({
      'margin-top': -card.outerHeight() / 2
    });


   let entrad= $("#entrada4").val();
   let salid= $("#salida4").val();

   
  var per = document.getElementsByName('Npersonas4');

  for (var i = 0; i < per.length; i++) {

    if (per[i].checked) {
      var persona = i;
        
    }
  }
  let n = persona+1;
  $('#numeroNoches4').html(NochesContadas4);
  $('#numeroHabitaciones4').html(NumeroHabitaciones4);
  $('#totalPagar4').html(totalT4);
   $('#ingresoAdulto4').html(n);
   $("#notaEntrada4").html(entrad);
   $("#notaSalida4").html(salid);

  }

  function hideAllDialogs() {

    // oculta dialogos visibles metodo jquery
    $('.dialog-overlay').fadeOut();

  }


  $('.dialog-confirm-button, .dialog-reject-button').on('click', function () {

    // Ocultamos el cuadro de dialogo cuando presionamos el boton
    hideAllDialogs();

  });

  $('.dialog-overlay').on('click', function (e) {

    if (e.target == this) {
      // ocultamos el cuadro cuando es clickeado directamente
      hideAllDialogs();
    }


  });

  $(document).keyup(function (e) {

    if (e.keyCode == 27) {
      // ocultamos cuando es presionado la tecla escape

      hideAllDialogs();
    }

  });


  // verificamos que cuadro de dialogo se esta presionando 
  // y mostramos el correcto

  $('.aniadirButton4').on('click', function () {

    // toma el contenido de  "data-show-dialog" attribute
    var toShow = $(this).data('show-dialog');

    showDialog4(toShow);
  });
});
  








  //-----------------------------------------calendario------------------------------------------------
  $(function () {
    $("#entrada").datepicker();
    $("#salida").datepicker({
      onClose: function () {
        //calculo de dias
        let entrada = $('#entrada').val();
        let salida = $('#salida').val();
        let residuo = Math.floor(new Date(salida) - new Date(entrada));
        let dia = 24 * 60 * 60 * 1000;
        let resultadoDia = Math.round(residuo / dia);
        $('#noche').html(resultadoDia);
        console.log(resultadoDia);
        total(resultadoDia);
      }
    });

    $("#entrada2").datepicker();
    $("#salida2").datepicker({
      onClose: function () {
        //calculo de dias
        let entrada = $('#entrada2').val();
        let salida = $('#salida2').val();
        let residuo = Math.floor(new Date(salida) - new Date(entrada));
        let dia = 24 * 60 * 60 * 1000;
        let resultadoDia = Math.round(residuo / dia);
        $('#noche2').html(resultadoDia);
        console.log(resultadoDia);
        total2(resultadoDia);
      }
    });

    $("#entrada3").datepicker();
    $("#salida3").datepicker({
      onClose: function () {
        //calculo de dias
        let entrada = $('#entrada3').val();
        let salida = $('#salida3').val();
        let residuo = Math.floor(new Date(salida) - new Date(entrada));
        let dia = 24 * 60 * 60 * 1000;
        let resultadoDia = Math.round(residuo / dia);
        $('#noche3').html(resultadoDia);
        console.log(resultadoDia);
        total3(resultadoDia);
      }
    });

    $("#entrada4").datepicker();
    $("#salida4").datepicker({
      onClose: function () {
        //calculo de dias
        let entrada = $('#entrada4').val();
        let salida = $('#salida4').val();
        let residuo = Math.floor(new Date(salida) - new Date(entrada));
        let dia = 24 * 60 * 60 * 1000;
        let resultadoDia = Math.round(residuo / dia);
        $('#noche4').html(resultadoDia);
        console.log(resultadoDia);
        total4(resultadoDia);
      }
    });

  
  });


  //------------------------------------totalnoche-------------------------------------------1
  function total(noche) {
    NochesContadas=noche;

    var per = document.getElementsByName('Npersonas');

    for (var i = 0; i < per.length; i++) {

      if (per[i].checked) {
        var persona = i;
          
      }
    }

    let selec;
    switch(persona){
        case 0:
        selec = 30;
        break;
        case 1:
        selec= 40;
        break;
        case 2:
        selec=40;
        break;
    }

    let nhab;
    let nHabit= $('#habitaciones').val();
    if (nHabit>4) {
      alert("[ERROR].Maximo 4 habitaciones");
      $('#habitaciones').val("");
    } else if(isNaN(nHabit)){
      alert("[ERROR].solo números");
      $('#habitaciones').val("");
    }else{
      if (nHabit==1) {
        nhab=nHabit;
      }else if(nHabit==2){
        nhab=nHabit;
      }else if (nHabit==3) {
        nhab=nHabit;
      }else{
        nhab=nHabit;
      }
    }
    NumeroHabitaciones=nhab;
    let precioNoche= selec;
    let total = precioNoche*nhab*noche;
    $("#total").html(total);
    $("#pNoche").html(precioNoche);
    totalT=total;
    console.log(total);

  }

  //------------------------------------totalnoche-------------------------------------------2
  function total2(noche) {
    NochesContadas2=noche;

    var per = document.getElementsByName('Npersonas2');

    for (var i = 0; i < per.length; i++) {

      if (per[i].checked) {
        var persona = i;
          
      }
    }

    let selec;
    switch(persona){
        case 0:
        selec = 40;
        break;
        case 1:
        selec= 50;
        break;
        case 2:
        selec=50;
        break;
    }

    let nhab;
    let nHabit= $('#habitaciones2').val();
    if (nHabit>4) {
      alert("[ERROR].Maximo 4 habitaciones");
      $('#habitaciones2').val("");
    } else if(isNaN(nHabit)){
      alert("[ERROR].solo números");
      $('#habitaciones2').val("");
    }else{
      if (nHabit==1) {
        nhab=nHabit;
      }else if(nHabit==2){
        nhab=nHabit;
      }else if (nHabit==3) {
        nhab=nHabit;
      }else{
        nhab=nHabit;
      }
    }
   NumeroHabitaciones2=nhab;
    let precioNoche= selec;
    let total = precioNoche*nhab*noche;
    $("#total2").html(total);
    $("#pNoche2").html(precioNoche);
    totalT2=total;
    console.log(total);

  }

  //------------------------------------totalnoche-------------------------------------------3
  function total3(noche) {
    NochesContadas3=noche;

    var per = document.getElementsByName('Npersonas3');

    for (var i = 0; i < per.length; i++) {

      if (per[i].checked) {
        var persona = i;
          
      }
    }

    let selec;
    switch(persona){
        case 0:
        selec = 50;
        break;
        case 1:
        selec= 60;
        break;
        case 2:
        selec=60;
        break;
    }

    let nhab;
    let nHabit= $('#habitaciones3').val();
    if (nHabit>4) {
      alert("[ERROR].Maximo 4 habitaciones");
      $('#habitaciones3').val("");
    } else if(isNaN(nHabit)){
      alert("[ERROR].solo números");
      $('#habitaciones3').val("");
    }else{
      if (nHabit==1) {
        nhab=nHabit;
      }else if(nHabit==2){
        nhab=nHabit;
      }else if (nHabit==3) {
        nhab=nHabit;
      }else{
        nhab=nHabit;
      }
    }
   NumeroHabitaciones3=nhab;
    let precioNoche= selec;
    let total = precioNoche*nhab*noche;
    $("#total3").html(total);
    $("#pNoche3").html(precioNoche);
    totalT3=total;
    console.log(total);

  }
    //------------------------------------totalnoche-------------------------------------------4
    function total4(noche) {
      NochesContadas4=noche;
  
      var per = document.getElementsByName('Npersonas4');
  
      for (var i = 0; i < per.length; i++) {
  
        if (per[i].checked) {
          var persona = i;
            
        }
      }
  
      let selec;
      switch(persona){
          case 0:
          selec = 60;
          break;
          case 1:
          selec= 70;
          break;
          case 2:
          selec=70;
          break;
      }
  
      let nhab;
      let nHabit= $('#habitaciones4').val();
      if (nHabit>4) {
        alert("[ERROR].Maximo 4 habitaciones");
        $('#habitaciones4').val("");
      } else if(isNaN(nHabit)){
        alert("[ERROR].solo números");
        $('#habitaciones4').val("");
      }else{
        if (nHabit==1) {
          nhab=nHabit;
        }else if(nHabit==2){
          nhab=nHabit;
        }else if (nHabit==3) {
          nhab=nHabit;
        }else{
          nhab=nHabit;
        }
      }
     NumeroHabitaciones4=nhab;
      let precioNoche= selec;
      let total = precioNoche*nhab*noche;
      $("#total4").html(total);
      $("#pNoche4").html(precioNoche);
      totalT4=total;
      console.log(total);
  
    }

  /*--------------------------
    preloader
    Desvanecimiento de las imagenes al cargar la pagina
    ---------------------------- */
  $(window).on('load', function () {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function () {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
   mantener el menu mientras se mueve hacia abajo*
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function () {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");

    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function () {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js pone una linea en el menu que se eligio
   precision del clik en el menu
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox 
  --------------------- */
  /*var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  Desliza suavemente de arriba hacia abajo
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function () {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
   cambia la posicion de los textos menu portafolio
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function () {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function () {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
   barras circulares
--------------------- */
  if (typeof ($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function () {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function () {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);
