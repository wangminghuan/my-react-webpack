export default function ajax(opts) {
    var defaults = {
        method: "GET",
        url: "",
        data: '',
        async: true,
        cache: true,
        contentType: 'application/x-www-form-urlencoded',
        sucess: function() {},
        error: function() {}
    };
    for (var key in opts) {
        defaults[key] = opts[key]
    }

    //处理用户输入的data数据

    if (typeof defaults.data == 'object' && !Object.prototype.toString.call(defaults.data) == "[object Array]") {
        var dataStr = "";
        for (var k in defaults.data) {
            dataStr += encodeURIComponent(k) + "=" + encodeURIComponent(defaults.data[k]) + "&"
        }
        defaults.data = dataStr.substring(0, dataStr.length - 1)
    }
    //将请求方式改为大写
    defaults.method = defaults.method.toUpperCase();

    //设置cache ,cache为false时设置随机数，防止缓存
    defaults.cache = defaults.cache ? "" : "&" + (new Date()).getTime();

    //GET方式下将data拼接到url中进行传递
    if (defaults.method == "GET" && (defaults.data || defaults.cache)) {
        defaults.url += "?" + defaults.data + defaults.cache;
    }

    //1. 创建XMLHttpRequest对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    //2. 同服务器建立联系，open方法
    xhr.open(defaults.method, defaults.url, defaults.async)

    //3. 向服务器发送请求，send方法
    if (defaults.method == "GET") {
        xhr.send()
    } else {
        xhr.setRequestHeader('Content-Type', defaults.contentType);
        //提交的数据格式，默认application/x-www-form-urlencoded
        xhr.send(defaults.data);
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                defaults.sucess(xhr.responseText)
            } else {
                defaults.error(xhr.status)
            }
        }
    }
}