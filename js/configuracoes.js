$(function(){
  $(".button-collapse").sideNav();
});

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 100, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

function concluirAlterarDados(){
      $('.collapsible').collapsible('close', 0);
       Materialize.toast('Dados Alterados Com Sucesso', 4000)
}

function cancelarAlterarDados(){
      $('.collapsible').collapsible('close', 0);
}

function concluirPreferencias(){
      $('.collapsible').collapsible('close', 1);
       Materialize.toast('Preferências Alterados Com Sucesso', 4000)
}

function cancelarPreferencias(){
      $('.collapsible').collapsible('close', 1);
}



$('.modal').modal();

function fotoTrocada(){
    Materialize.toast('Foto Trocada com sucesso', 4000, 'rounded')
}
