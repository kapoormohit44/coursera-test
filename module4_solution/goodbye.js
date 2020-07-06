(function(bye) {
    var saybye = new Object();
    var word = "Good Bye";
    saybye.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    bye.saybye = saybye;
})(bye);
