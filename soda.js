var chxm1023 = JSON.parse($response.body);

chxm1023.result = {
  "products" : [
    {
      "managed" : false,
      "status" : "CANCELLED",
      "startDate" : 1688988287000,
      "productId" : "com.snowcorp.soda.subscribe.oneyear",
      "expireDate" : 4092599349000
    }
  ],
  "activated" : true
};

$done({body : JSON.stringify(chxm1023)});