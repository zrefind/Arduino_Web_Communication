// module setup
var express = require('express');
var http = require('http');
var path = require('path');
var serialPort = require('serialport');

var app = express();
var server = http.createServer(app);
server.listen(3000);

// arduino setup
var arduinoPort = new serialPort('/dev/cu.usbmodem141101', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

arduinoPort.on('open', function() {
    console.log('Serial Open');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.status(200).render('controller.ejs');
})
app.get('/controller/:id', function(req, res) {
    arduinoPort.write(req.params.id);
    res.status(200).send('IT WORKS');
})