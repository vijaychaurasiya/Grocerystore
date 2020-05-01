var cartButtons = $('.cart-plus-minus').find('button');
var total = parseInt($("#amount-1").val());
$("#total").val(total);
$(cartButtons).on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var target = $this.parent().data('target');
  var target = $('#' + target);
  var current = parseFloat($(target).val());
  if ($this.hasClass('cart-plus-1'))
    target.val(current + 1);
  else {
    (current < 2) ? null: target.val(current - 1);
  }
  var num1=399;
  total = parseInt($("#amount-1").val())*num1;
  $("#total").val(total);
});
