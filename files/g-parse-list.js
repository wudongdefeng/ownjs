/**
 * mode 通用设置说明
 *  0  : 解析集合页 
 * 数字(1-4...) : 网页解析表   
 * '①' : ①HTV009  '②' : ②迪奥解析 ...
 *  ①  ②  ③  ④  ⑤  ⑥  ⑦  ⑧  ⑨  ⑩
 * */

// 爱奇艺设置
var iqiyi_mode = 0;
var iqiyi_coding = '8191'; // (仅③有效)视频编码 ：8191 - H265(可能只有声音没有画面) 8196 - H264(可能没有4K地址)
var iqiyi_Resolution = '800'; // (仅③有效)分辨率：800-4k  600-蓝光  500-超清
// 腾讯设置
var qq_mode = 0;
var qq_sharpness = 'fhd'; // (仅③有效)sd-标清 hd-高清 shd-超清 fhd-蓝光
// 优酷设置
var youku_mode = 0;
// 芒果设置
var mgtv_mode = 0;
// 咪咕设置
var migu_mode = 0;
var sharpness = 1; // 1-最清 2-最低 3-可选

// 全局网页解析列表(可按格式添加修改)
var parsing_list = [
    '我爱解析￥https://vip.52jiexi.top/?url=',
    '菜鸟￥https://jiexi.bm6ig.cn/?url=',
    '久播￥https://jx.jiubojx.com/vip.php?url='
];
var HTV009_pre = [
    'https://user.htv009.com/json?url=',
    'http://5.nmgbq.com/j1/api.php?url=',
    'https://jx.ikancloud.cn/api.php?url=',
    'https://zhima18.cn/plugin/jiexi.php?url='
];
// 全局直链解析列表(可按格式添加修改)
var parse_list = [
    `①HTV009￥` + HTV009_pre[Math.floor(Math.random() * 4)] + `￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = HTV009.toUrl(input);url!=''?url:getUrl(input)`,
    `②迪奥￥http://api.1dior.cn/analysis/first/api.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 迪奥.toUrl(input);url!=''?url:getUrl(input)`,
    `③北极XS￥http://beijixs.cnn?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 北极XS.toUrl(input);url!=''?url:getUrl(input)`,
    `④Mao全网￥https://www.cuan.la/m3u8.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = Mao全网.toUrl(input);url!=''?url:getUrl(input)`,
    `⑤TX￥https://qq.79da.com/api.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = TX.toUrl(input);url!=''?url:getUrl(input)`,
    `⑥黑云￥https://jiexi.380k.com/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 黑云.toUrl(input);url!=''?url:getUrl(input)`
,
    `⑦Maosp￥http://39.maosp.me/jx/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = Maosp.toUrl(input);url!=''?url:getUrl(input)`,
    `⑧wkjx￥https://www.wkjx.me/apii/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = wkjx.toUrl(input);url!=''?url:getUrl(input)`
];

eval(getCryptoJS());
var tools = {
    kem: 'https://gitee.com/KemPetrichor/hiker.resolver/raw/master/kem.js',
    MD5: function (data) {
        return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
    },
    decrypt: function (text, key, iv) {
        var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8);
    }
};

var HTV009 = {
    toUrl: function (input) {
        try {

            var json = JSON.parse(fetch(input, {}));
            var url = (json.code == '200' ? json.url + '#HTV009.mp4' : '');
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@' + json.domain + '}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 迪奥 = {
    toUrl: function (input) {
        try {
            var in_url = input.indexOf('migu') > -1 ? (input.split('cid=')[1] + '@miguvideo') : input.split('url=')[1];
            var json = JSON.parse(fetch(input.split('?url=')[0], { body: 'url=' + in_url, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#迪奥.mp4' : '');
            if (url != '') {
                url = (url.indexOf('http') > -1 ? url : 'http:' + url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 北极XS = {
    Init: function () {
        if (getVar('VIEWSTATE').length == 0) {
            var beiji_html = fetch('http://beijixs.cn', {});
            putVar({ key: 'VIEWSTATE', value: parseDomForHtml(beiji_html, 'body&&form&&input&&value') });
            putVar({ key: 'EVENTVALIDATION', value: parseDomForHtml(beiji_html, 'body&&form&&input,2&&value') });
        }
    },
    toUrl: function (input) {
        try {
            this.Init();
            var html = fetch('http://beijixs.cn/?url=', { body: 'Button1=解析&TextBox4=' + iqiyi_Resolution + '&DropDownList2=' + iqiyi_coding + '&DropDownList1=' + qq_sharpness + '&TextBox1=' + input.split('url=')[1] + '&__VIEWSTATE=' + getVar('VIEWSTATE') + '&__EVENTVALIDATION=' + getVar('EVENTVALIDATION'), method: 'POST' });
            var json = JSON.parse(parseDomForHtml(html, 'body&&#TextBox2&&value'));
            return json.videos[0].url + '#北极XS.mp4';
        } catch (e) {
            return '';
        }

    }
};
var Mao全网 = {
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#Mao全网.mp4';
            return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
        } catch (e) {
            return '';
        }
    }
};
var TX = {
    toUrl: function (input) {
        try {
            var json = JSON.parse(fetch(input.split('url=')[0], { body: 'url=' + input.split('url=')[1], method: 'POST' }));
            var url = ((json.code == 200 && /m3u8/.test(json.url)) ? (json.url + '#TX.mp4') : '');
            if (url != '') {
                url = (url.indexOf('http') > -1 ? url : 'http:' + url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 黑云 = { //此解析来自KEM大佬和Reborn吐大佬, 特此感谢
    mode: 0, // kem大佬网络版：0 , 本地：1
    api: "https://jx.shunyiwenxiu.com/dhyjx_ver_9.1.php",
    parse_url_prefix: 'https://jiexi.380k.com/?url=',
    encrypt_file: "https://jx.shunyiwenxiu.com/js/ACCot.js",
    base_key: "daheiyunjiexi0614",
    local_got_key: "daheiyun1888",
    local_token_key: "_wp6f",
    keyEncryption: function (key) {
        key = tools.MD5(key + this.local_got_key);
        key = tools.MD5(key + this.local_got_key);
        return key;
    },
    tokenEncryption: function (key) {
        return tools.MD5(key + this.local_token_key);
    },
    toUrl: function (src_url) {
        try {
            if (this.mode) {
                src_url = this.rebuildUrl(src_url);
                let url = src_url.split('=')[1];
                let time = parseInt((new Date().getTime() / 1000).toString());
                let key = this.keyEncryption(url + time + this.base_key);
                let data = 'url=' + url
                    + '&tm=' + time
                    + '&key=' + key
                    // + '&key2=' + this.key2
                    + '&token=' + this.tokenEncryption(key)
                    + '&sdky=' + this.tokenEncryption(time);
                let options = {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    body: data,
                    method: "POST"
                };
                let result = fetch(this.api, options);
                let playUrl = JSON.parse(result).url;
                if (playUrl.indexOf("http") === -1) {
                    playUrl = "https://" + playUrl;
                }
                return playUrl + '#黑云.mp4';
            } else {
                eval(fetch(tools.kem, {}));
                return daheiyun.getUrl(src_url) + '#黑云w.mp4';
            }
        } catch (e) {
            return '';
        }
    },
    rebuildUrl: function (old_url) {
        return old_url.indexOf(this.parse_url_prefix) > -1 ? old_url : this.parse_url_prefix + old_url;
    },
};
var Maosp = {
    mode: 0, // kem大佬网络版：0 , 本地：1
    toUrl: function (input) {
        try {
            if (this.mode) {
                var html = fetch(input, {});
                var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#Maosp.mp4';
                if (url.indexOf('titan.mgtv') > -1) {
                    url = url + ';{Referer@http://39.maosp.me}';
                }
                return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
            } else {
                eval(fetch(tools.kem, {}));
                return maosp.getUrl(input);
            }
        } catch (e) {
            return '';
        }
    }
};
var wkjx = {
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            var vkey = html.split("vkey = '")[1].split("'")[0];
            var json = JSON.parse(fetch('https://www.wkjx.me/apii/api.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'vkey=' + vkey, method: 'POST' }));
            var url = (json.ckflv == 200 ? json.url + '##wkjx.mp4' : '');
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://www.wkjx.me}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};

function getUrl(input) {
    var input_arr = input.split('url=');
    for (var i in parse_list) {
        var parse_list_arr = parse_list[i].split('￥');
        if (parse_list_arr[1].indexOf(input_arr[0]) > -1)
            continue;
        input = parse_list_arr[1] + input_arr[1];
        var str = 'var url = ' + parse_list_arr[0].substr(1) + '.toUrl("' + input + '")';
        eval(str);
        if (url !== '')
            return url;
    }
    return parsing_list[0] + input_arr[1];
}
