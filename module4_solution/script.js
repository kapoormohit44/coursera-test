(function() {
    var names = ["Mohit", "Johnson", "Jenny", "Joker", "Rohit", "Ashok", "Sunny", "Shubham", "Justin", "Riya"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].toLowerCase();
        if (firstLetter === 'j') {
            saybye.speak(names[i]);
        } else {
            sayhello.speak(names[i]);
        }
    }
})();
