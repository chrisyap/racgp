$('.patientDemographics').on('click','patient-header',function(){
  $(this).find('.toggle i').toggle();
  $('.patient-record').slideToggle();
});

$('.btn-toggle').on('click',function(){
  var parent = $(this).parent();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).find('i').toggle();
  } else {
    parent.find('.btn-toggle').removeClass('active');
    parent.find('.btn-toggle i').toggle();
    $(this).addClass('active');
  }
});
