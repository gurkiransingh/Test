function remoteMathService(cb) {
    var one, two;
    callOneService(function(err, num) {
    one = num;
    });
    callTwoService(function(err, num) {
    two = num;
    });
    return cb(undefined, one + two);
}

function callOneService(cb) {
    // setTimeout(function() {
    return cb(undefined, 1);
    // }, 1000);
}

function callTwoService(cb) {
    // setTimeout(function() {
    return cb(undefined, 2);
    // }, 1500);
}


module.exports = remoteMathService ;