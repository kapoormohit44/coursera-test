(function(window) {
    var saybye = new Object();
    var word = "Good Bye";
    saybye.speak = function speak(name) {
        console.log(word + " " + name);
    };
    window.saybye = saybye;
})(window);
