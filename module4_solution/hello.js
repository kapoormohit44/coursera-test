(function(hello) {
    var sayhello = new Object();
    var word = "Hello";
    sayhello.speak = function(name) {
        console.log(word + " " + name);
    };
    hello.sayhello = sayhello;
})(hello);
