(function(window) {
    var sayhello = new Object();
    var word = "Hello";
    sayhello.speak = function(name) {
        console.log(word + " " + name);
    };
    window.sayhello = sayhello;
})(window);
