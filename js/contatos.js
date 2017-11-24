$(function(){
  $(".button-collapse").sideNav();
});

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

 $('.chips-placeholder').material_chip({
   placeholder: 'Insira uma tag',
   secondaryPlaceholder: '+Tag',
 });

 $('.chips').on('chip.add', function(e, chip){
     $('.chip').addClass('color-chips');
  });

  $('.chips').on('chip.delete', function(e, chip){
      $('.chip').addClass('gray');
});


function sucessoCadastro(){
    Materialize.toast('Novo contato adicionado!', 4000, 'rounded')
}

function fotoTrocada(){
    Materialize.toast('Foto Trocada com sucesso', 4000, 'rounded')
}
