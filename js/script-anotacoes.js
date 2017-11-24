$(function(){
  $(".button-collapse").sideNav();
});

$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();
 });

 
 function fotoTrocada(){
     Materialize.toast('Foto Trocada com sucesso', 4000, 'rounded')
 }
