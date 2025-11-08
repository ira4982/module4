(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    var message = speakWord + " " + name;
    console.log(message);
    document.write(message + "<br>");
  };

  window.byeSpeaker = byeSpeaker;
})(window);
