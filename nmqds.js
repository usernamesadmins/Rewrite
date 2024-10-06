var objc = JSON.parse($response.body);

    objc = {
  "code" : 200,
  "data" : {
    "create_time" : "2023-07-27 15:47:17",
    "vip_expire" : "2099-12-31 18:10:32",
    "cause" : "成功",
    "flag" : "permanent",
  },
  "msg" : "ok",
  "t" : "2024-04-03 12:21:23"
}

$done({body : JSON.stringify(objc)});
