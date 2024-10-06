var chxm1023 = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];

const list = {
  'focoslive': { id: "com.focoslive.1y_t130_adj" },  //Focos live-视频编辑工具
};

for (const key in list) {
  if (new RegExp(`^${key}`, `i`).test(ua)) {
    chxm1023["me"]["active_subscriptions_ids"] = [list[key].id];
    chxm1023["me"]["active_bundle_subscriptions"] = [{
      "expiry": "2099-09-09T09:09:09+00:00",
      "product_id": list[key].id,
      "features": ["unlock"]
    }];
    chxm1023["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
    break;
  }
}

$done({body: JSON.stringify(chxm1023)});
