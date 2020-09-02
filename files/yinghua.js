function erji() {
    res = {};
    d = [];
    var orisource = getResCode();
    var con = parseDom(orisource, 'body&&Html').match(/<div class=\"movurl[\s\S]*?<\/div>/g);

    var mlist = con[0];
    var listper = mlist.match(/<li[\s\S]*?<\/li>/g);
    var surl = parseDom(listper[0], 'li&&a&&href');
    var surlres = fetch(surl, { headers: { 'content-type': 'charst=GBK' }, method: 'GET' });
    var isnew = surlres.search('playnew.js');
    var jsurl = parseDom(surlres, '.player&& script,0&&src');
    var jsurlres = fetch(jsurl, { headers: { 'content-type': 'charst=GBK' }, method: 'GET' }).match(/var[\s\S]*\]/g)[0];
    eval(jsurlres);

    for (var i = 0; i < VideoListJson.length; i++) {
        d.push({
            title: VideoListJson[i][0],
            col_type: 'text_1'
        });

        for (var j = 0; j < VideoListJson[i][1].length; j++) {
            let lists = VideoListJson[i][1][j].split('$');
            let playarg = lists[1];
            let playurl;
            if (lists[2] == 'flv' || lists[2] == 'm3u8') {
                playurl = playarg;
            }
            else if (lists[2] == 'qiyi') {
                let lazy = `let qiyirescode_1=fetch(input,{});let qiyiurl_1=parseDom(qiyirescode_1,'body&&script,2&&src');let qiyirescode_2=fetch(qiyiurl_1,{});eval(qiyirescode_2);var code=tvInfoJs["code"];var cip=tvInfoJs["data"]["vidl"];for(var i=0,l=cip.length;i<l;i++){for(var key in cip[i]){if(cip[i].vd==14||cip[i].vd==17||cip[i].vd==21||cip[i].vd==1||cip[i].vd==96){}else{if(cip[i].vd==4){var m3u=cip[i].m3u}else{var m3=cip[i].m3u}}}}var video=m3u;if(video=="undefined"||video==null||video==""){video=m3}video`;
                playurl = 'http://v.jialingmm.net/qy.php?id=' + playarg + '@lazyRule=.js:' + lazy;
            }
            else if (lists[2] == 'qqy') {
                //https://api.52wyb.com/
                // https://api.52wyb.com/webcloud/?v=http://www.iqiyi.com/v_19rrok4nt0.html
                // referer http://www.imomoe.in

                let oriurl = 'http://www.iqiyi.com/v_' + playarg+'.html';
                let lazy=`eval(getCryptoJS());eval(fetch('https://api.52wyb.com/js/md5.js?v=170726',{}));eval(fetch('https://api.52wyb.com/js/md5xp.js?v=170821',{}));function mark(pas){return md5("__fangdaolian__"+q(pas))+md5(q(pas)+"__fangdaolian__end")}function get(sess){var level=CryptoJS["MD5"](md5("6f9s2gb8d21w4x6v2j5f5o5b5d"+sess+"duoxieguanzhu")["substring"](16));var adjustedLevel=CryptoJS["enc"]["Utf8"]["parse"](level);var iv=CryptoJS["enc"]["Utf8"]["parse"](md5("elechipaomian"+sess["split"]("")["reverse"]()["join"]("")+"laotansuancaiweide")["substring"](16));var pixelSizeTargetMax=CryptoJS["AES"]["encrypt"](sess,adjustedLevel,{"iv":iv,"mode":CryptoJS["mode"]["CBC"],"padding":CryptoJS["pad"]["ZeroPadding"]});return"result:"+pixelSizeTargetMax["toString"]()};let jiexirescode_1=fetch('https://api.52wyb.com/webcloud/?v='+getUrl(),{headers:{'referer':'http://www.imomoe.in'}});let hx=jiexirescode_1.match(/合作.*/g);let tm=jiexirescode_1.match(/"tm" value="(.*?)"/)[1];let csign=jiexirescode_1.match(/"get" value="(.*?)"/)[1];let v=jiexirescode_1.match(/"v": "(.*?)"/)[1];let cip=jiexirescode_1.match(/"cip": "(.*?)"/)[1];let cip_hex=jiexirescode_1.match(/"cip_hex": "(.*?)"/)[1];let cache=jiexirescode_1.match(/cache = (.*?);/)[1];let pad=jiexirescode_1.match(/vd .{1} "(.*?)"/)[1];let v4cha='var k4ori='+jiexirescode_1.match(/eval.{1}function.*/g)[0];let k4='';let document={};document.domain="api.52wyb.com";eval('/*'+hx[0]);let k2=md5(k3);let k=mark(vd+pad);let tmp=cache;eval(v4cha);k3_sub=encodeURIComponent(get(k4));let jiexirescode_2=fetch('https://api.52wyb.com/action/playinfo?sver=1.4',{headers:{'referer':'https://api.52wyb.com','Accept':'application/json, text/javascript, */*;q=0.01','X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},method:'POST',body:'k='+k+'&k2='+k2+'&k3='+k3_sub+'&ep='+ep+'&cip='+cip+'&cip_hex='+cip_hex+'&csign='+csign+'&tm='+tm+'&v='+v+'&pt=auto&nip=null&from=http://www.imomoe.in&mode='});let jiexi_3='https://api.52wyb.com'+JSON.parse(jiexirescode_2).url;let jiexirescode_3=fetch(jiexi_3,{headers:{'referer':'https://api.52wyb.com'},method:'GET',});jiexi_3_playurl=jiexirescode_3.match(/<.{2}CDATA.+?>/g);let res={};let d=[];for(let idx=1;idx<jiexi_3_playurl.length;idx++){let tmpurl=jiexi_3_playurl[idx];d.push({title:'part_'+idx.toString(),desc:'',pic_url:'',url:tmpurl.substring(9,tmpurl.length-3),col_type:'text_2'})}res.data=d;setHomeResult(res);`;
                playurl = oriurl + '@rule=js:' + lazy;
            }
            else {
                playurl = getUrl();
            }
            d.push({
                title: lists[0],
                desc: '',
                pic_url: '',
                url: playurl,
                col_type: 'text_2'
            });
        }
    }
    res.data = d;
    setHomeResult(res);
}