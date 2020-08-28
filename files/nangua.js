function search() {
    res = {};
    d = [];
    var orisource = getResCode();
    if (orisource.length < 1000) {
        let jmp = orisource.match(/"(.*?\?btwaf=.*?)";/);
        orisource = fetch('http://www.nangua5.com' + jmp[1], {});
    }
    var filmlist = orisource.match(/<div class="details-info-min[\s\S]*?<div class="details-info[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/g);
    if (filmlist == null) { }
    else {
        for (let idx = 0; idx < filmlist.length; idx++) {
            d.push({
                title: parseDomForHtml(filmlist[idx], '.details-info&&a,0&&title'),
                url: parseDom(filmlist[idx], '.details-info&&a,0&&href'),
                content: parseDomForHtml(filmlist[idx], '.details-content-default&&Text'),
                img: parseDomForHtml(filmlist[idx], '.video-pic&&data-original'),
                desc: parseDomForHtml(filmlist[idx], '.info&&span&&Text')
            });
        }
    }
    res.data = d;
    setSearchResult(res);
}
function jiexi() {
    res = {};
    d = [];
    var orisource = getResCode();
    // waf jmp
    if (orisource.indexOf('btwaf') > 0) {
        let jmp = orisource.match(/"(.*?\?btwaf=.*?)";/);
        orisource = fetch('http://www.nangua5.com' + jmp[1], {});
    }

    var filmlist = orisource.match(/<li class="col-md-2 col-sm-3 col-xs-4[\s\S]*?<\/li>/g);
    for (let idx = 0; idx < filmlist.length; idx++) {
        d.push({
            title: parseDomForHtml(filmlist[idx], '.title&&Text'),
            url: parseDom(filmlist[idx], '.title&&a&&href'),
            desc: parseDomForHtml(filmlist[idx], '.note&&Text'),
            pic_url: parseDomForHtml(filmlist[idx], 'a,0&&data-original'),
            col_type: 'movie_3'
        });
    }
    res.data = d;
    setHomeResult(res);
}
function erji() {
    res = {};
    d = [];
    var orisource = getResCode();
    var tabs = parseDom(orisource, '#playTab&&Html').match(/<li[\s\S]*?<\/li>/g);
    var con = parseDom(orisource, '.playlist&&Html').match(/<ul[\s\S]*?<\/ul>/g);
    for (var i = 0; i < tabs.length; i++) {
        let tabtitle = parseDomForHtml(tabs[i], 'li&&a&&Text');
        d.push({
            title: tabtitle,
            col_type: 'text_1'
        });
        var per = con[i].match(/<li[\s\S]*?<\/li>/g);
        for (var j = per.length - 1; j >= 0; j--) {
            var perurl = parseDom(per[j], 'li&&a&&href');
            var title = parseDomForHtml(per[j], 'li&&a&&Text');
            perurl = perurl + `@lazyRule=.js:var perurlres=fetch(input,{});eval(parseDom(perurlres,"#cms_play&&script,0&&Html"));var zanpianplayurl=zanpiancms_player.apiurl+zanpiancms_player.url;var zanpianplayurlres=fetch(zanpianplayurl,{});var playurlres="";var trueplayurl="";if(zanpianplayurlres.search(/<iframe/)>0&&zanpianplayurlres.search(/'<iframe/)<=0){playurlres=fetch(parseDom(zanpianplayurlres,"iframe&&src"),{})}else{playurlres=zanpianplayurlres}var key=playurlres.match(/"key": "(.*?)"/)[1];var time=playurlres.match(/"time": "(.*?)"/)[1];var playurlres_1=fetch("https://api.longdidi.top/parse/api.php",{headers:{},body:"url="+zanpiancms_player.url+"&time="+time+"&key="+key+"&wap=0",method:"POST"});var playurlres_1_json=JSON.parse(playurlres_1);if(playurlres_1_json["code"]==200){trueplayurl=playurlres_1_json["url"]}else if(playurlres_1_json["code"]==100){let big_url=playurlres_1_json["url"].split('=')[1];let jxrescode=fetch('https://www.wkjx.me/apii/?='+big_url,{});let vkey=jxrescode.match(/var vkey = '(.*?)'/)[1];let jxrescode_1=fetch("https://www.wkjx.me/apii/api.php",{headers:{'user-agent':'Mozilla/5.0 (Linux;Android 8.0.0;Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Mobile Safari/537.36'},body:"vkey="+vkey,method:"POST"});let jxrescode_1_json=JSON.parse(jxrescode_1);if(jxrescode_1_json["ckflv"]==200){trueplayurl=jxrescode_1_json["url"]}else if(jxrescode_1_json["ckflv"]==403){}}trueplayurl`
            d.push({
                title: title,
                desc: '',
                pic_url: '',
                url: perurl,
                col_type: 'text_2'
            });
        }
    }
    res.data = d;
    setHomeResult(res);
}