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
                // let jiexirescode_1=fetch(input,
                //     {
                //         headers:
                //         {
                //             'referer': 'http://www.imomoe.in'
                //         }
                //     }
                // );
                // let jiexirescode_2=fetch('https://api.52wyb.com/action/playinfo?sver=1.4',
                //     {
                //         method:'POST',
                //         body:'k=mark(vd + "1430382e0a9d52965c6b526695a857ff")&k2=md5(k3)&k3=encodeURIComponent(get(k4))&ep=ep&cip=36.45.45.97&cip_hex=242d2d61&csign=$("#get").val()&tm=$("#tm").val()&v='+oriurl+'&pt=auto&nip=null&from="http://www.imomoe.in"&mode=""'
                //     }
                // );

                let oriurl = 'http://www.iqiyi.com/v_' + playarg+'.html';
                let lazy=`let jiexirescode_1=fetch(input,{headers:{'referer':'http://www.imomoe.in'}});setError(jiexirescode_1)`;
                // playurl = 'https://api.52wyb.com/webcloud/?v=' + oriurl + '@lazyRule=.js:' + lazy;
                playurl = getUrl();
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