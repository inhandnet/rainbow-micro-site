var express = require('express');
var app = express();

app.set('jsonp callback name', 'call_back');
app.get('/cgi-bin/counting', function (req, res) {
  res.write("hello world");
});

app.get('/api/gateway/gateway_info', function (req, res) {
  res.jsonp({
    platform: "t.u2wifi.cn",
    orgId: "123412341234123412341234",
    loginMethod: "facebook,qq,one-click"
  });
});

app.use(express.static("../../", {
  index: "index.html"
}));

var server = app.listen(2000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
