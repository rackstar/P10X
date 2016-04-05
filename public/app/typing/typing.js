var type = {};

$(function () {
  var $inputArea = $('#inputArea')
  type.code = "for (var i = 0; i < array.length; i++)"
  type.key;
  type.index = 0;

  type.init = function () {
    //listener for key input
    $inputArea.on('keydown', function (event) {
      type.key = String.fromCharCode(event.which);
      //compares key input to text
      type.compare(type.key);
    });

  }

  ;

  type.compare = function (key) {
    //compare with current letter
    if (key === type.code.charAt(type.index)) {
      //if same light up green
      $('#' + type.index).addClass('correct');
    } else {
      $('#' + type.index).addClass('incorrect');
      
    }



    //if different light up red


  }

});
