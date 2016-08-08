require('newrelic');
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var fib = function(n) {
    if (n === 0){
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

app.get("/:number", function (req, res) {
    var number = req.param("number"); 
    var result = fib(number);
    res.send("Node + Express<hr> fib("+number+"): "+result); 
});

console.log('Server running on port ' + PORT);
app.listen(PORT);
