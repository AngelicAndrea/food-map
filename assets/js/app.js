
var cont = $('#food');
$(document).ready(function(){
    $(function(){
        setTimeout(function() {
           $('#splash').fadeOut(500);
        }, 2000);
     });
     
// selección de comida =============================================================     
    $('#categorias').on('change', function(){//adjuntar (on) un evento de change en el id - change: Adjuntar una función para el evento de cambio:
    var selection = $('#categorias').val();//rescato el valor del selector
    if(selection === 'china'){
        $('#food').empty();
        cont.html('<img src="assets/images/china2.jpg" alt="" class="imagen-food">, <img src="assets/images/china3.jpg" alt="" class="imagen-food">, <img src="assets/images/china4.jpg" alt="" class="imagen-food">');//remplaza el contendo del html
    }
    if(selection === 'mexicana'){
        $('#food').empty();
        cont.html('<img src="assets/images/mexicana2.jpg" alt="" class="imagen-food">, <img src="assets/images/mexicana3.jpg" alt="" class="imagen-food">, <img src="assets/images/mexicana4.jpg" alt="" class="imagen-food">');
    }
    if(selection === 'japonesa'){
        $('#food').empty();
        cont.html('<img src="assets/images/japonesa2.jpg" alt="" class="imagen-food">, <img src="assets/images/japonesa3.jpg" alt="" class="imagen-food">, <img src="assets/images/japonesa4.jpeg" alt="" class="imagen-food">');
    }
    if(selection === 'italiana'){
        $('#food').empty();
        cont.html('<img src="assets/images/italiana2.jpg" alt="" class="imagen-food">, <img src="assets/images/italiana3.jpg" alt="" class="imagen-food">, <img src="assets/images/italiana4.jpg" alt="" class="imagen-food">');
    }
    if(selection === 'chilena'){
        $('#food').empty();
        cont.html('<img src="assets/images/chilena2.jpg" alt="" class="imagen-food">, <img src="assets/images/chilena3.jpg" alt="" class="imagen-food">, <img src="assets/images/chilena4.jpg" alt="" class="imagen-food">');
    }
    });    
// efecto imagen ============================================= 
    $(".efecto1").mouseover(function(){
        $(".efecto1").css('opacity','0.5');
    }); 
    $(".efecto1").mouseout(function(){
        $(".efecto1").css('opacity', '1');
    });
    $(".efecto2").mouseover(function(){
        $(".efecto2").css('opacity','0.5');
    }); 
    $(".efecto2").mouseout(function(){
        $(".efecto2").css('opacity', '1');
    });
    $(".efecto3").mouseover(function(){
        $(".efecto3").css('opacity','0.5');
    }); 
    $(".efecto3").mouseout(function(){
        $(".efecto3").css('opacity', '1');
    });
    $(".efecto4").mouseover(function(){
        $(".efecto4").css('opacity','0.5');
    }); 
    $(".efecto4").mouseout(function(){
        $(".efecto4").css('opacity', '1');
    });
    $(".efecto5").mouseover(function(){
        $(".efecto5").css('opacity','0.5');
    }); 
    $(".efecto5").mouseout(function(){
        $(".efecto5").css('opacity', '1');
    });
// modal ============================================= 
    var $modalPrueba = $('.modal-prueba'),
        $modalContainer = $('.modal-container'),
        $modalBtn = $('.modal-btn'),
        $modalClose = $('.modal-close');

    $modalBtn.on('click', function(){
        $modalContainer.toggleClass('modal--show');
      });
      
      $modalPrueba.on('click', function(){
        $modalContainer.toggleClass('modal--show');
      });
      
      $modalClose.on('click', function(){
        $modalContainer.removeClass('modal--show');
      });
});