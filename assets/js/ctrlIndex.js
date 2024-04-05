
var myAvance = {
  infoHist: 0,
  nuesStruct_1: 0,
  nuesStruct_2: 0,
  nuesStruct_3: 0,
  nuesStruct_4: 0,
  nuesStruct_5: 0,
  nostReg: {
    bras: 0,
    col: 0,
    costRic: 0,
    guat: 0,
    mex: 0,
    nica: 0,
    pana: 0,
    vene: 0,
    arg: 0,
    uru: 0
  },
  myEcos: -1,
  unAdn: -1,
  unAdn3: -1,
  finish_Adn3: 0,
  sistEt_1: 0,
  sistEt_2: 0,
  sistEt_3: 0,
  bandera_1: 0,
  bandera_2: 0,
  bandera_3: 0,
  bandera_4: 0,
  bandera_5: 0,
  bandera_6: 0,
  bandera_7: 0,
  bandera_8: 0,
  bandera_9: 0,
  bandera_10: 0,
  myProd: 1,
  adnKof: -1,
  sisEt: -1,
  ciclo: -1,
  bienestarInter: -1,
  mindset: -1,
  cadenaValor: -1
};
var vidCheck = false
var vidCheck2 = false
var vidCheck3 = false
var vidCheck4 = false

var misSlides = {
  cult: 1, unADN_1: 1, unADN_2: 1, inc: 1
};
let culturaNuestra_1 = 1;
$(document).ready(function () {
  console.log("entra on ready");
  // Registra un mensaje cuando AOS se inicializa
  console.log('AOS se está inicializando...');
  AOS.init({
    duration: 1000,
  });
  console.log('AOS se ha inicializado correctamente.');

  // Registra un mensaje cuando AOS está activo
  window.addEventListener('aos:in', function (event) {
    console.log('Elemento con data-aos activado:', event.detail);
  });

  // Registra un mensaje cuando AOS se desactiva
  window.addEventListener('aos:out', function (event) {
    console.log('Elemento con data-aos desactivado:', event.detail);
  });
  pushInStart();
  verificarOrientacion()
});

var flagMus = 1;
function muteMe(e) {
  e.muted = !0;
}
function unMuteMe(e) {
  e.muted = !1;
}
$(".music").click(function () {
  var e = document.querySelectorAll(".fondo");
  0 === flagMus ? (flagMus = 1,
    $(".music").attr("src", "assets/img/icons/on.png"),
    [].forEach.call(e, function (e) {
      unMuteMe(e);
    })) : 1 === flagMus && ($(".music").attr("src", "assets/img/icons/off.png"),
      flagMus = 0,
      [].forEach.call(e, function (e) {
        muteMe(e);
      })
    );
});


$(window).on('resize orientationchange', function () {
  verificarOrientacion();
});

function verificarOrientacion() {
  if (window.innerHeight > window.innerWidth) {
    $(".contenido-visible").hide();
    $(".advertencia").show();
  } else {
    $(".contenido-visible").show();
    $(".advertencia").hide();
  }
}
function control_scroll(ptrIntPerc) {
  if (ptrIntPerc <= 10) {
    $("#seccion_1").css('visibility', 'visible');
  } else {
    $("#seccion_1").css('visibility', 'hidden');
  }
  98.9 <= ptrIntPerc && 17 > myAvance.infoHist && (myAvance.infoHist = 17, setComplete());
  if (ptrIntPerc >= 99.5) {
    $(".mouse").hide();
    // poof()
  } else {
    $(".mouse").show();
  }
  movement();
}
$('.link-container').hover(function () {
  // Muestra los sublinks cuando el mouse entra.
  $(this).find('.sublinks').stop(true, true).slideDown('fast');
}, function () {
  // Oculta los sublinks cuando el mouse sale.
  $(this).find('.sublinks').stop(true, true).slideUp('fast');
});
//Audio clic botenes generales
$(".clic").click(function () {
  $('#a__clic')[0].play();
});
//Audio close modales, carruseles
$(".cclose").click(function () {
  $('#a__close')[0].play();
});
//Audio next carrusles
$(".cnext").click(function () {
  $('#a__next')[0].play();
});

function ctrl_avBool(ptrClass, ptr_id) {
  if (myAvance[ptrClass + '_' + ptr_id] === 0) {
    $('#btn_' + ptrClass + '_' + ptr_id).removeClass('w3-opacity');
    myAvance[ptrClass + '_' + ptr_id] = 1;
  }
}

function ctrl_avBool_lv2(ptrClass, ptr_id) {
  if (myAvance[ptrClass][ptr_id] === 0) {
    $('#btn_' + ptrClass + '_' + ptr_id).removeClass('w3-opacity');
    myAvance[ptrClass][ptr_id] = 1;
  }
}

function ctrl_avBool_lv3(ptrClass, ptr_id) {
  if (myAvance[ptrClass + '_' + ptr_id] === 0) {
    $('#btn_' + ptrClass + '_' + ptr_id).removeClass('hide');
    myAvance[ptrClass + '_' + ptr_id] = 1;
  }
}


function ctrl_avElem(ptrClass, ptrID, ptrClassAnim) {
  $('.btn_' + ptrClass).css({ 'pointer-events': 'none' }).addClass(ptrClassAnim);
  if (myAvance[ptrClass] < parseInt($('.btn_' + ptrClass).length)) {
    myAvance[ptrClass] = parseInt(ptrID) + 1;
    $('#btn_' + ptrClass + '_' + myAvance[ptrClass]).css('pointer-events', 'auto').removeClass(ptrClassAnim);
  } else if (myAvance[ptrClass] >= parseInt($('.btn_' + ptrClass).length)) {
    $('.btn_' + ptrClass).css('pointer-events', 'auto').removeClass(ptrClassAnim).css('pointer-events', 'auto');
  }
}
function ctrl_avElemAnimationes(ptrClass, ptrID, ptrClassAnim) {
  $('.btn_' + ptrClass).css({ 'pointer-events': 'none' }).addClass(ptrClassAnim).removeClass('animated pulse infinite');
  if (myAvance[ptrClass] < parseInt($('.btn_' + ptrClass).length)) {
    myAvance[ptrClass] = parseInt(ptrID) + 1;
    for (i = 0; i < myAvance[ptrClass]; i++) {
      $('#btn_' + ptrClass + '_' + i).css('pointer-events', 'auto').removeClass('w3-opacity');
    }
    $('#btn_' + ptrClass + '_' + myAvance[ptrClass]).css('pointer-events', 'auto').removeClass(ptrClassAnim).addClass('animated pulse infinite');
  } else if (myAvance[ptrClass] >= parseInt($('.btn_' + ptrClass).length)) {
    $('.btn_' + ptrClass).css('pointer-events', 'auto').removeClass(ptrClassAnim).css('pointer-events', 'auto');
  }
}
function buttonInteractive(buttonClass, rutaName) {
  $(`.btn_${buttonClass}`).click(function () {
    const buttonId = $(this).attr("id");
    const [_, strClass, strID] = buttonId.split("_");
    console.log(_, strClass, strID);
    const animations = 'animated zoomIn';
    $(`.text_${buttonClass}`).each(function () {
      const $element = $(this);
      $element.removeClass(animations);
      const rutaImg = `${rutaName}_${strID}.png`;
      $element.attr("id", `text_${strClass}_${strID}`);
      $element.attr("src", rutaImg);
      console.log(rutaImg);
      ctrl_avElemAnimationes(strClass, strID, 'w3-opacity animated pulse infinite');
      setTimeout(function () {
        $element.addClass(animations);
      }, 50);
    });
  });
}
function playVideo(rutaName, className, strID, videoCheck) {
  // Construimos la ruta del video basada en los parámetros proporcionados
  let videoSrc = `assets/video/${rutaName}_${strID}.mp4`;

  // Seleccionamos el elemento de video correcto usando el ID único, en lugar de la clase
  let videoElement = $(`#vid_${className}_${strID}`)[0];

  // Actualizamos el src del elemento source dentro del video
  $(videoElement).find('source').attr('src', videoSrc);

  // Cargamos el video con la nueva fuente y lo reproducimos
  videoElement.load();
  videoElement.play();

  // Manejo de eventos basado en videoCheck
  if (videoCheck === false) {
    videoElement.addEventListener('ended', function () {
      $(`#cls_${className}_${strID}`).removeClass('hide').addClass('animated infinite pulse');
    });
  } else {
    $(`#cls_${className}_${strID}`).removeClass('hide');
  }
}

function modalPlayVideo(className, rutaName) {
  $(`.btn_${className}`).click(function () {
    let strID = $(this).attr('id').split('_')[2];
    $(`#mod_${className}_${strID}`).show();
    playVideo(rutaName, className, strID, vidCheck); // Asegúrate de que vidCheck esté definido correctamente
  });

  $(`.cls_${className}`).click(function () {
    let strID = $(this).attr('id').split('_')[2];
    $(`#mod_${className}_${strID}`).hide();
    $(`#cls_${className}_${strID}`).removeClass('animated infinite heartBeat pulse');
    $(`#btn_${className}_${strID}`).removeClass('animated infinite heartBeat pulse');
    // Seleccionamos el video usando su ID para pausarlo y reiniciar su tiempo
    let videoElement = $(`#vid_${className}_${strID}`)[0];
    videoElement.pause();
    videoElement.currentTime = 0;
    videoCheck = true
  });
}

$("#precache_index").waitForImages({
  finished: function () {
    $('#loading_screen').fadeOut('slow');
    // $('#mod_video_1').show();
    // $("#vid1")[0].play();
    $("#fondo1")[0].pause();
    // $("html").css('overflow-y', "hidden");
    ctrl_avElem('myEcos', '0', 'w3-opacity');
    ctrl_avElemAnimationes('adnKof', '0', 'w3-opacity');
    ctrl_avElemAnimationes('ciclo', '0', 'w3-opacity');
    ctrl_avElem('unAdn', '0', 'w3-opacity');
    ctrl_avElem('unAdn3', '0', 'w3-opacity');
    ctrl_avElem('sisEt', '0', 'w3-opacity');
    ctrl_avElemAnimationes('bienestarInter', '0', 'w3-opacity');
    ctrl_avElemAnimationes('mindset', '0', 'w3-opacity');
    ctrl_avElemAnimationes('cadenaValor', '0', 'w3-opacity');
    $(window).scroll(function () {
      control_scroll((100 * $(window).scrollTop() / ($(document).height() - $(window).height())).toFixed(4));
    });
  },
  waitForAll: true
});




$('.btn_nostReg').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('.celu_nostReg').hide();
  $('#celu_nostReg_' + strID).show();
  $('#mapa_nostReg').attr('src', 'assets/img/nuest_reg/map_' + strID + '.png');
  ctrl_avBool_lv2(strClass, strID);
});



$('.btn_nuesStruct').click(function () {
  $(".struc").hide();
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $(".clic_" + strID + "_logos").show().addClass('animated zoomIn');
  $(".clic_" + strID + "_txt").show().addClass('animated zoomIn');

  ctrl_avBool(strClass, strID);
});

$('#btn_quienesSomos').click(function () {
  $('#mod_play_conoce').show();
});

$('#cls_play_conoce').click(function () {
  $('video')[0].pause();
  $('#mod_play_conoce').hide();
});

// $('.cls_nuesStruct').click(function () {
//   strClass = $(this).attr("id").split("_")[1];
//   strID = $(this).attr("id").split("_")[2];
//   $('#mod_' + strClass + '_' + strID).hide();
// });

$('.btn_myEcos').click(function () {
  $(".elem_myEcos").hide();
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('#div_' + strClass + '_' + strID).show();
  ctrl_avElem(strClass, strID, 'w3-opacity');
});

$('.btn_unAdn').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('#mod_' + strClass + '_' + strID).show();
  $('html').css({ 'overflow': 'hidden' });
  ctrl_avElem(strClass, strID, 'w3-opacity');
});

$('.cls_unAdn').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('html').css({ 'overflow': 'auto' });
  $('#mod_' + strClass + '_' + strID).hide();
});

$('.btn_principios').hover(
  function () {
    let id = $(this).attr('id').split('_')[2];
    $(`#btn_principios_${id}`).css({ 'top': '30%' });
    setTimeout(() => {
      $(`#cuerpo_principios_${id}`).css({ 'opacity': 1 });
    }, 1000);
  }
);
$('.btn_modal_principio').click(function () {
  $('#a__clic')[0].play();
  let id = $(this).attr('id');
  $(`#mod_${id}`).show();
});
$('.cls_principios').click(function () {
  let id = $(this).attr('id');
  id = id.replace('cls_', '');
  $(`#mod_${id}`).hide();
});

// Función que da movimiento a los elementos de la inmersión
var actual_people = $(".inm_people").css("bottom");
var actual_white = $(".inm_white").css("bottom");
var actual_whiteR = $(".inm_whiteR").css("bottom");
var actual_red = $(".inm_red").css("bottom");
var actual_title = $(".inm_title").css("left");
var actual_circleW = $(".inm_circleW2").css("left");
var actual_halfDown = $(".inm_halfDown").css("bottom");

window.addEventListener('resize', function (event) {
  actual_people = $(".inm_people").css("bottom");
  actual_white = $(".inm_white").css("bottom");
  actual_whiteR = $(".inm_whiteR").css("bottom");
  actual_red = $(".inm_red").css("bottom");
  actual_title = $(".inm_title").css("left");
  actual_circleW = $(".inm_circleW2").css("left");
  actual_halfDown = $(".inm_halfDown").css("bottom");
});



var new_scroll = 0;
function movement() {
  var scroll = Math.round(this.scrollY);
  $(".inm_people").css("bottom", parseInt(actual_people) - parseInt(scroll * .2));
  $(".inm_white").css("bottom", parseInt(actual_white) + parseInt(scroll * .05));
  $(".inm_red").css("bottom", parseInt(actual_red) - parseInt(scroll * .2));
  $(".inm_title").css("left", parseInt(actual_title) - parseInt(scroll * .5));
  $(".inm_circleW2").css("left", parseInt(actual_circleW) - parseInt(scroll));
  $(".inm_halfDown").css("bottom", parseInt(actual_halfDown) - parseInt(scroll * .8));
}

$("#cls_video_1").click(function () {
  $(".mod_video").hide();
  $("#vid1")[0].currentTime = 0;
  $("#vid1")[0].pause();
  $('#fondo1')[0].play();
  $("#fondo1")[0].volume = 0.3;
  $("html").css('overflow-y', 'auto');
});
$("#cls_video_2").click(function () {
  $(".mod_video").hide();
  $("#vid2")[0].currentTime = 0;
  $("#vid2")[0].pause();
  $("#fondo1")[0].play();
  $("html").css('overflow-y', 'auto');
});
$("#cls_video_3").click(function () {
  $(".mod_video").hide();
  $("#vid3")[0].currentTime = 0;
  $("#vid3")[0].pause();
  $("#fondo1")[0].play();
  $("html").css('overflow-y', 'auto');
});

$(".btn_letrero").click(function () {
  $("#mod_video_2").show();
  $("#vid2")[0].play();
  $("#fondo1")[0].pause();
  $("html").css('overflow-y', 'hidden');
});

$(".vamos_btn").click(function () {
  $("#mod_video_3").show();
  $("#vid3")[0].play();
  $("#fondo1")[0].pause();
  $("html").css('overflow-y', 'hidden');
});

$(".btn_somos").click(function () {
  $("#mod_video_1").show();
  $("#vid1")[0].play();
  $("#fondo1")[0].pause();
  $("html").css('overflow-y', 'hidden');
});


//Inicio Un ADN KOF
$('.btn_adnKof').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('.mod_adnKofs').hide();
  $('#mod_adnKofs_' + strID).show();
  // $('.btn_adnKof').removeClass('animated pulse infinite')
  ctrl_avElemAnimationes(strClass, strID, 'w3-opacity');
});

$(".cls_adnKof").click(function () {
  strID = $(this).attr("id").split("_")[2];
  $('#mod_adnKofs_' + strID).hide();
});
//Fin Un ADN KOF
//Inicio Sistema integral de ética
$('.btn_sisEt').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('#mod_sisEt_' + strID).show();
  // $('.btn_adnKof').removeClass('animated pulse infinite')
  ctrl_avElemAnimationes(strClass, strID, 'w3-opacity');
});

$(".cls_sisEt").click(function () {
  strID = $(this).attr("id").split("_")[2];
  $('#mod_sisEt_' + strID).hide();
});
//Inicio Código de Ética
$('.btn_bandera').click(function () {
  strClass = $(this).attr("id").split("_")[1];
  strID = $(this).attr("id").split("_")[2];
  $('.tel_pais').hide().removeClass('animated zoomIn');
  $('#tel_pais_' + strID).show().addClass('animated zoomIn');
  $('#btn_bandera_' + strID).removeClass("animated pulse infinite w3-opacity").addClass("animated rotateIn btn_bandera");
  ctrl_avBool_lv3(strClass, strID);
});

$('.btn_tipEtica').click(function () {
  $("#mod_etica_1").show();
});
$(".cls_etica").click(function () {
  $("#mod_etica_1").hide();
  $(".btn_tipEtica").removeClass("animated heartBeat infinite");
});
//Fin Código de Ética


///Nuestra cultura 

$("#cult_Prev").click(function () {
  //$("#efct_clic")[0].play();
  $('html, body').animate({
    scrollTop: $("#seccion_7").offset().top
  }, 125);
  $('.slide_cult').removeClass('slideInLeft slideInRight');
  $('.slide_cult').addClass('slideInLeft');
  1 < misSlides.cult && misSlides.cult--;
  ctrl_carru_simple('cult', misSlides.cult);
});
$("#cult_Next").click(function () {
  //$("#efct_clic")[0].play();
  $("#cult_Next").removeClass('animated infinite heartBeat');
  $('html, body').animate({
    scrollTop: $("#seccion_7").offset().top
  }, 125);


  $('.slide_cult').removeClass('slideInLeft slideInRight');
  $('.slide_cult').addClass('slideInRight');
  $('.slide_cult').length > misSlides.cult && misSlides.cult++;
  ctrl_carru_simple('cult', misSlides.cult);
});

//Inicio ciclo flecha




//Fin Un ciclo Flecha

//Control general para curruseles sencillos
function ctrl_carru_simple(ptrCarruClass, ptrSlideActual) {
  $(".slide_" + ptrCarruClass).hide();
  $("#slide_" + ptrCarruClass + "_" + ptrSlideActual).show();
  if (ptrSlideActual <= 1) {
    $("#" + ptrCarruClass + "_Prev").hide();
    $("#" + ptrCarruClass + "_Next").show();
  } else if (ptrSlideActual >= $(".slide_" + ptrCarruClass).length) {
    $("#" + ptrCarruClass + "_Prev").show();
    $("#" + ptrCarruClass + "_Next").hide();
  } else {
    $("#" + ptrCarruClass + "_Prev,#" + ptrCarruClass + "_Next").show();
  }
}
// Sección UN ADN


$("#cls_videoPlataforma_1").click(function () {
  $(".mod_videoPlataforma").hide();
  $("#vid4")[0].currentTime = 0;
  $("#vid4")[0].pause();
  $("#fondo1")[0].play();
  $("html").css('overflow-y', 'auto');
});

$(".btn_viPlataforma").click(function () {
  $("#mod_videoPlataforma_1").show();
  $("#vid4")[0].play();
  $("#fondo1")[0].pause();
});
$("#cls_videoMyKof_1").click(function () {
  $(".mod_videoMyKof").hide();
  $("#vid5")[0].currentTime = 0;
  $("#vid5")[0].pause();
  $("#fondo1")[0].play();
  $("html").css('overflow-y', 'auto');
});

$(".btn_viMyKof").click(function () {
  $("#mod_videoMyKof_1").show();
  $("#vid5")[0].play();
  $("#fondo1")[0].pause();
});


//Sección Inclusiva

$("#inc_Prev").click(function () {
  //$("#efct_clic")[0].play();
  $('.slide_inc').removeClass('slideInLeft slideInRight');
  $('.slide_inc').addClass('slideInLeft');
  1 < misSlides.inc && misSlides.inc--;
  ctrl_carru_simple('inc', misSlides.inc);
});

$("#inc_Next").click(function () {
  //$("#efct_clic")[0].play();
  $('.slide_inc').removeClass('slideInLeft slideInRight');
  $('.slide_inc').addClass('slideInRight');
  $('.slide_inc').length > misSlides.inc && misSlides.inc++;
  ctrl_carru_simple('inc', misSlides.inc);
});

$('.btn_soloKofs').click(function () {
  strID = $(this).attr("id").split("_")[2];
  $(".mod_soloKofs").show();
  var imgSrc = "assets/img/plataforma/modales/modal_" + strID + ".png";
  $('.map_soloKofs').attr("src", imgSrc);
  setTimeout(function () {
    $('#cls_soloKofs_' + strID).removeClass('animated zoomIn');
    $('#cls_soloKofs_' + strID).addClass('animated heartBeat infinite');
  }, 1000)
});
$('.cls_soloKofs').click(function () {
  $('.mod_soloKofs').hide();
});
$('.btn_prioridadesEst').click(function () {
  strID = $(this).attr("id").split("_")[2];
  $(".mod_prioridadesEst").show();
  var imgSrc = "assets/img/prioridades-estrategicas/modal_" + strID + ".png";
  $('.map_prioridadesEst').attr("src", imgSrc);
  setTimeout(function () {
    $('#cls_prioridadesEst_' + strID).removeClass('animated zoomIn');
    $('#cls_prioridadesEst_' + strID).addClass('animated heartBeat infinite');
  }, 1000)
});
$('.cls_prioridadesEst').click(function () {
  $('.mod_prioridadesEst').hide();
});


// btn_esfDivIcon
$('.btn_esfDivIcon').click(function () {
  const strID = $(this).attr("id").split("_")[2];
  $('#btn_esfDivIcon_' + strID).css('top', '21%');
  $('#esfDiv_mod_' + strID).removeClass('hide').addClass('animated flipInY').show();
  $('#esfDiv_text_' + strID).removeClass('hide').addClass('animated zoomIn delay-1s').show();
})

buttonInteractive('ciclo', 'assets/img/cadena-de-valor/contenido/contenido');
buttonInteractive('bienestarInter', 'assets/img/bienestarIntegral/text');
buttonInteractive('cadenaValor', 'assets/img/scrollHorizontal/text');
buttonInteractive('mindset', 'assets/img/universidad-femsa/text');
modalPlayVideo('quienesSomos', 'quieneSomos', vidCheck);
modalPlayVideo('compSaludable', 'cocaCola', vidCheck2);
modalPlayVideo('plataTalento', 'plataTalento', vidCheck3);
modalPlayVideo('myKofVid', 'myKof', vidCheck4);

