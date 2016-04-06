angular.module('services', [])

.factory('readSrvc', function() {
  var data = 'He didn’t have permission. But he did it anyway. And one day Elon Musk called him. He was either going to make life really horrible on me or he was going to cooperate with the book” said Ashlee Vance, author of the New York Times bestseller and Wall Street Journal’s “best books of the year,” Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future. Ashlee did 200 interviews before Elon agreed, proving permission is not a starting place. I wish I wrote the book. But I didn’t. My “quest” is different. Instead, I mastered curiosity. I called people and recorded. I did a ton of research. I read every book, article, interview and watched every talk. I’ve spent 10,000 hours interviewing and more than 10,000 hours preparing. I didn’t need permission. And neither do you.'

  var split = function(data, n) {
    var array = data.split(' ');
    var temp = []
    var result = []
    array.forEach(function(word) {
      temp.push(word);
      if (temp.length >= n) {
        result.push([temp.join(' ')]);
        temp = [];
      }
    })
    return result;
  };

  var text = split(data, 3);

  showSlide = function() {
    var textArea = document.getElementById('textArea');
    var text = textArea.getElementsByTagName('div');
    console.log(text);
    for (i = 0; i < text.length; ++i) {
      var word = text[i];
      console.log(word);
      $(word).show().delay(600)
        .queue(function() {
          $(this).hide();
          $(this).dequeue();
      });
    console.log('finished');
    }
  };

  var appendData = function(data) {
    var index = 1;
    console.log('appending data');
    data.forEach(function(word) {
      var newWord = '<div class="w' + index + ' words" style="display: node;">' + word[0] + '</div>'
      $('#textArea').append(newWord);
      index++;
    });
    console.log('data appended', index);
    showSlide();
  };


  return {
    text: text,
    appendData: appendData
  }
})