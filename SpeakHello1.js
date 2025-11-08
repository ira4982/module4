(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    var message = speakWord + " " + name;
    console.log(message);
    document.write(message + "<br>");
  };

  window.helloSpeaker = helloSpeaker;
})(window);
