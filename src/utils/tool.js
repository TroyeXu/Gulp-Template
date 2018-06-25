module.exports = {
  timeFormat(leftsecond) {
    leftsecond = (leftsecond <= 0) ? 0 : leftsecond;
    let ls = (parseInt(leftsecond, 10) <= 0) ? 0 : parseInt(leftsecond, 10);
    let hour = parseInt(ls / 3600, 10); //小时
    let minute = Math.floor((ls - hour * 3600) / 60); //分钟
    let second = Math.floor(ls - hour * 3600 - minute * 60); //秒
    let o = {};
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    o.hour = hour;
    o.minute = minute;
    o.second = second;
    return o;
  },
  accChu(arg1, arg2) { //除法函数
    var t1 = 0,
      t2 = 0,
      r1, r2;
    try {
      t1 = arg1.toString().split(".")[1].length
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length
    } catch (e) {}
    if (Math) {
      r1 = Number(arg1.toString().replace(".", ""))
      r2 = Number(arg2.toString().replace(".", ""))
      return (r1 / r2) * pow(10, t2 - t1);
    }
  },
  accChen(arg1, arg2) { //乘法函数
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length
    } catch (e) {}
    try {
      m += s2.split(".")[1].length
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },
  accJia(arg1, arg2) { //加法函数
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  },
  accJian(arg1, arg2) { //减法函数
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  toFixed(num, s) { //toFixed 修复
    var times = Math.pow(10, s);
    var des = num * times + 0.5;
    des = parseInt(des, 10) / times;
    return des + "";
  },
  goBack() {
    // 回上一頁
    history.back();
  },
  splitNumberString(input) {
    // "1,2,3,4,5" => [ "1","2","3","4","5" ]
    return input.split(",");
  },
  fliterHTMLinJSON: function (inputJSON) {
    let f = inputJSON.substring(inputJSON.indexOf("{"));
    return JSON.parse(f);
  }
}
