$('.patientDemographics').on('click','patient-header',function(){
  $(this).find('.toggle i').toggle();
  $('.patient-record').slideToggle();
});

$(".floating-label").each(function () {
  var group = $(this);
  var field = group.find('.form-control');
  if (field.val()){
    group.addClass('float');
  }
  field.focus(function () {
    group.addClass('float');
    group.addClass('help');
  }).blur(function() {
    group.removeClass('help');
    if (!field.val()) {
      group.removeClass('float');
    }
  })
});

$('.radio').on('click','.btn',function(){
  var radio = $(this).parents('.radio');
  var btn = $(this);
  radio.find('.btn').removeClass('active');
  btn.addClass('active');
})

$('.checkbox').on('click','.btn',function(){
  var radio = $(this).parents('.checkbox');
  var btn = $(this);
  btn.find('i').toggle();
  if (btn.hasClass('active')){
    btn.removeClass('active');
  } else {
    radio.find('.btn').removeClass('active');
    btn.addClass('active');
  }
})
