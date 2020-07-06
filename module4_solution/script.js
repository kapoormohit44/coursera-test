(function() {
    var names = ["Mohit", "Johnson", "Jenny", "Joker", "Rohit", "Ashok", "Sunny", "Shubham", "Justin", "Riya"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
