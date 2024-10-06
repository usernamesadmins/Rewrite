var objc = JSON.parse($response.body);

    objc = {
  "code" : 200,
  "data" : {
    "vip_expire" : "2099-12-31 18:10:32",
  },
  "msg" : "ok",
  "t" : "2024-04-03 12:21:23"
}

$done({body : JSON.stringify(objc)});
