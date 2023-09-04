exports.home = function(req, res) {
    res.send({data: "Service is running"})
}
exports.about = function(req, res) {
    res.send({data: "Thanks for using service"})
}

