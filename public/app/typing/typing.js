var type = {};

$(function () {

  type.code = "for (var i = 0; i < array.length; i++)";

  type.index = 0;

  type.compare = function (key) {
    //compare with current letter
    $('#' + type.index).removeClass('next');
    if (key === type.code.charAt(type.index)) {
      //if same addClass correct
      $('#' + type.index).addClass('correctType');
    } else {
      //if different addClass incorrect
      $('#' + type.index).addClass('incorrect');
    }
    type.index++;
  }

  type.keyboard = function(key) {
    $('#' + type.index).addClass('next');
    var pressedKey = $('#keyboard').find('.' + key);
    pressedKey.addClass('activeType')
      .delay(150)
      .queue(function() {
        $(this).removeClass("activeType");
        $(this).dequeue()
      });
  };

});
