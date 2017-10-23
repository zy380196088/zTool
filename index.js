/*
 * @Author: Joy
 * @Date:   2017-10-23 10:04:52
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-23 10:12:08
 */

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:', host, port);
});
