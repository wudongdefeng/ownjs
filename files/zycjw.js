function erji() {
var res = {};
var items = [];
items.push({
title:'该版本已停用，点击更新最新版',
desc:'请使用9.9更新的全新搜索规则的版本',
url:'rule://5rW36ZiU6KeG55WM6KeE5YiZ5YiG5Lqr77yM5b2T5YmN5YiG5Lqr55qE5piv77ya6aaW6aG16aKR6YGT77+laG9tZV9ydWxl77+leyJ0aXRsZSI6Iui1hOa6kOe9kemHh+mbhi54eXEiLCJhdXRob3IiOiLpppnpm4Xmg4UiLCJ1cmwiOiJmeUFsbCIsInZlcnNpb24iOjQsImNvbF90eXBlIjoibW92aWVfMyIsImNsYXNzX25hbWUiOiLov5znqIvmlofku7Ym5pys5Zyw5paH5Lu2IiwiY2xhc3NfdXJsIjoiaHR0cHM6Ly9naXRlZS5jb20vbHprMjM1NTkvcHVibGljX2ZvbGRlci9yYXcvbWFzdGVyL1pZV0NKLnR4dCZmaWxlOi8vL3N0b3JhZ2UvZW11bGF0ZWQvMC9BbmRyb2lkL2RhdGEvY29tLmV4YW1wbGUuaGlrZXJ2aWV3L2ZpbGVzL0RvY3VtZW50cy9ydWxlcy/otYTmupDnvZHph4fpm4YudHh0IiwiYXJlYV9uYW1lIjoiIiwiYXJlYV91cmwiOiIiLCJzb3J0X25hbWUiOiIiLCJ5ZWFyX25hbWUiOiIiLCJzb3J0X3VybCI6IiIsInllYXJfdXJsIjoiIiwiZmluZF9ydWxlIjoianM6XG52YXIgaHRtbCA9IGdldFJlc0NvZGUoKTtcbi8vdmFyIGFyciA9IGJhc2U2NERlY29kZShodG1sKS5tYXRjaCgvI1tcXHNcXFNdKj8jL2cpO1xudmFyIGFyciA9IGh0bWwuaW5kZXhPZignaHR0cCcpIT0tMT9odG1sLm1hdGNoKC8jW1xcc1xcU10qPyMvZyk6YmFzZTY0RGVjb2RlKGh0bWwpLm1hdGNoKC8jW1xcc1xcU10qPyMvZyk7XG52YXIgcmVzID0ge307XHJcbnZhciBpdGVtcyA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbnZhciB0YWJzID0gYXJyW2ldLm1hdGNoKC8jLio/W1xcc10vZylbMF0uc3BsaXQoJyMnKVsxXS5yZXBsYWNlKC9cXG4vLCcnKTtcbnZhciBsaXN0ID0gYXJyW2ldLm1hdGNoKC9bXFxTXSo/LC4qP1tcXHNdL2cpO1xuXG5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRhYnMsXG4gICAgICAgICAgICBjb2xfdHlwZTogJ2xvbmdfdGV4dCdcclxuICAgICAgICB9KTtcblxuZm9yICh2YXIgaiA9IDA7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XG5cbml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogbGlzdFtqXS5zcGxpdCgnLCcpWzBdLFxyXG4gICAgICAgICAgICB1cmw6IGxpc3Rbal0uc3BsaXQoJywnKVsxXSsnP2FjPWxpc3QmcGc9ZnlwYWdlJyxcbiAgICAgICAgICAgIGNvbF90eXBlOiAndGV4dF8zJ1xyXG4gICAgICAgIH0pO1xuIH1cclxufVxyXG4vL3NldEVycm9yKGxpc3RbMl0pO1xuXG5cclxucmVzLmRhdGEgPSBpdGVtcztcclxuc2V0SG9tZVJlc3VsdChyZXMpOyIsInNlYXJjaF91cmwiOiJoaWtlcjovLyQkJD93ZD0qKiZwZz0xJmFjPWxpc3QkJCRmeXBhZ2UiLCJ0aXRsZUNvbG9yIjoiIiwiZ3JvdXAiOiLikaDmkJzntKIiLCJzZWFyY2hGaW5kIjoianM6XG52YXIgcmVzID0ge307XG52YXIgaXRlbXMgPSBbXTtcbi8v6K6+572u6buY6K6k5pCc57Si57q/56iL5pWw6YeP77yM5pWw5a2X6LaK5aSn6LaK5oWi44CCXG52YXIgc3N4YyA9ICc0JztcblxudmFyIHNzID0gZ2V0VXJsKCkuc3BsaXQoJyQkJCcpWzFdO1xudmFyIG51bT0gZ2V0VXJsKCkuc3BsaXQoJyQkJCcpWzJdO1xudmFyIGxlID0gbnVtKnNzeGM7XG4vL3NldEVycm9yKGxlKTtcbmlmKG51bT09JzEnKXtcbnB1dFZhcih7a2V5OidmYW55JywgdmFsdWU6Jyd9KTtcblxuLy/orr7nva7mkJzntKLov5znqIvmlofku7blnLDlnYBcbnZhciBzcmM9ZmV0Y2goJ2h0dHBzOi8vZ2l0ZWUuY29tL2x6azIzNTU5L3B1YmxpY19mb2xkZXIvcmF3L21hc3Rlci9aWVdDSi50eHQnLHt9KTtcbi8v6K6+572u5pCc57Si5pys5Zyw5paH5Lu25Zyw5Z2AXG4vL3ZhciBzcmM9ZmV0Y2goJ2hpa2VyOi8vZmlsZXMvcnVsZXMv6LWE5rqQ572R6YeH6ZuGLnR4dCcse30pO1xuXG5wdXRWYXIoe2tleTonZmFueScsIHZhbHVlOnNyY30pO1xufVxuXG5pZihudW09PScxJyl7c3JjPXNyYzt9ZWxzZXtzcmM9Z2V0VmFyKCdmYW55Jyl9O1xuXG52YXIgY2MgPSBzcmMuaW5kZXhPZignaHR0cCcpIT0tMT9zcmMubWF0Y2goL1tcXFNdKj8sLio/W1xcc10vZyk6YmFzZTY0RGVjb2RlKHNyYykubWF0Y2goL1tcXFNdKj8sLio/W1xcc10vZyk7XG5cbmZvcih2YXIgaT1sZS1zc3hjO2k8bGU7aSsrKXtcbmlmKGk8Y2MubGVuZ3RoKXtcbnZhciBhcnIgPSBjY1tpXS5zcGxpdCgnLCcpWzFdO1xudmFyIGh0bWw9ZmV0Y2goY2NbaV0uc3BsaXQoJywnKVsxXStzcyx7fSk7XG4vL3NldEVycm9yKGh0bWwpO1xuaWYgKGh0bWwuaW5kZXhPZign5q2j5Zyo5a6J5YWo5qOA5rWL5LitJykgIT0gLTEpIHtcbmh0bWw9ZmV0Y2goY2NbaV0uc3BsaXQoJywnKVsxXStzcysnJicraHRtbC5zcGxpdCgnbGlzdCYnKVsxXS5zcGxpdCgnXFxcIicpWzBdLCB7fSk7XG59XG5pZihodG1sLmluZGV4T2YoJzx2aWRlbz4nKT09LTEpe1xuaXRlbXMucHVzaCh7XG5cdFx0XHR0aXRsZTogJ+KAnOKAnCcrY2NbaV0uc3BsaXQoJywnKVswXSsn4oCd4oCdJysn5pyq5pCc57Si5Yiw55u45YWz6LWE5rqQJyxcblx0XHRjb2xfdHlwZTogJ3RleHRfY2VudGVyXzEnXG59KTs7fWVsc2V7XG5cblxudmFyIGxpc3QgPSBwYXJzZURvbUZvckh0bWwoaHRtbCwgJ3JzcyYmSHRtbCcpLm1hdGNoKC88dmlkZW8+W1xcc1xcU10qPzxcXC92aWRlbz4vZyk7XG4vL3NldEVycm9yKGxpc3RbMF0pO1xuZm9yICh2YXIgaiA9IDA7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBwYXJzZURvbUZvckh0bWwobGlzdFtqXSwnYm9keSYmbmFtZSYmVGV4dCcpO1xyXG4gICAgICAgIHZhciB1cmwgPSBwYXJzZURvbUZvckh0bWwobGlzdFtqXSwnYm9keSYmaWQmJlRleHQnKTtcbiAgICAgICAgdmFyIG5vdGUgPSBwYXJzZURvbUZvckh0bWwobGlzdFtqXSwnYm9keSYmbm90ZSYmVGV4dCcpO1xuICAgICAgICB2YXIgbGFzdCA9IHBhcnNlRG9tRm9ySHRtbChsaXN0W2pdLCdib2R5JiZsYXN0JiZUZXh0Jyk7XHJcbiAgICAgICAgdmFyIHR5cCA9IHBhcnNlRG9tRm9ySHRtbChsaXN0W2pdLCdib2R5JiZ0eXBlJiZUZXh0Jyk7XG5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlK1wiIFwiKycg4oCiICcrbm90ZSxcbiAgICAgICAgICAgIGRlc2M6IGNjW2ldLnNwbGl0KCcsJylbMF0rJyDCtyAnK2xhc3QrJyAgJyt0eXAsXHJcbiAgICAgICAgICAgIHVybDogYXJyK1wiP2FjPXZpZGVvbGlzdCZpZHM9XCIrdXJsLFxuICAgICAgICAgICAgY29sX3R5cGU6ICd0ZXh0X2NlbnRlcl8xJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxuICB9XG59XG59XHJcbnJlcy5kYXRhID0gaXRlbXM7XHJcbnNldFNlYXJjaFJlc3VsdChyZXMpOyIsImRldGFpbF9jb2xfdHlwZSI6Im1vdmllXzEiLCJkZXRhaWxfZmluZF9ydWxlIjoianM6XG52YXIgbmV0PWZldGNoKCdodHRwczovL2dpdGVlLmNvbS9semsyMzU1OS9wdWJsaWNfZm9sZGVyL3Jhdy9tYXN0ZXIvenljancuanMnLHt9KTtcclxuLy92YXIgbmV0PWZldGNoKCdoaWtlcjovL2ZpbGVzL3J1bGVzL2pzL3p5Y2p3LmpzJyx7fSk7XG5ldmFsKG5ldCk7XG5uZXJqaSgpOyIsInNkZXRhaWxfY29sX3R5cGUiOiJtb3ZpZV8xIiwic2RldGFpbF9maW5kX3J1bGUiOiJqczpcbnZhciBuZXQ9ZmV0Y2goJ2h0dHBzOi8vZ2l0ZWUuY29tL2x6azIzNTU5L3B1YmxpY19mb2xkZXIvcmF3L21hc3Rlci96eWNqdy5qcycse30pO1xyXG4vL3ZhciBuZXQ9ZmV0Y2goJ2hpa2VyOi8vZmlsZXMvcnVsZXMvanMvenljancuanMnLHt9KTtcbmV2YWwobmV0KTtcbmpoc3NlcmppKCk7IiwidWEiOiJwYyIsInByZVJ1bGUiOiIifQ==',
col_type: 'text_center_1'
});
res.data=items;
setHomeResult(res);
}
function nerji() {
var html = getResCode();
if (html.indexOf('正在安全检测中') != -1) {
html=fetch(MY_URL+'&'+html.split('&')[2].split('\"')[0], {});
}
var arrr = getUrl().split("?")[0];
var res = {};
var items = [];
//对第一页分类进行处理
if(html.indexOf("page=\"1\"")!=-1){
var type = parseDomForHtml(html,"class&&Html").match(/<ty [\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text");
var url = parseDomForHtml(type[i],"body&&ty&&id");
if(title.indexOf("伦理")==-1&&title.indexOf("福利")==-1&&title.indexOf("写真")==-1&&title.indexOf("VIP")==-1&&title.indexOf("美女")==-1&&title.indexOf("里番")==-1&&title.indexOf("性感")==-1&&title.indexOf("倫理")==-1&&title.indexOf("论理")==-1){
items.push({
title:title,url:arrr+"?ac=videolist&pg=fypage&t="+url+`@rule=js:var html = getResCode();var arrr = getUrl().split("?")[0];var res = {};var items = [];try{var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\\s\\S]*?<\\/video>/g);for(var j = 0; j <list.length; j++){var title = parseDomForHtml(list[j],"body&&name&&Text"); var url = parseDomForHtml(list[j],"body&&id&&Text"); var note = parseDomForHtml(list[j],"body&&note&&Text"); var last = parseDomForHtml(list[j],"body&&last&&Text"); var typ = parseDomForHtml(list[j],"body&&type&&Text"); var pic = parseDomForHtml(list[j],"body&&pic&&Text");/((http|https):\\/\\/.*?)\\/.*?/.test(pic);var imgRefer = "@Referer=" + RegExp.$1;items.push({title:title+"状态："+note,pic_url:pic+imgRefer,desc:last+"类型："+typ,url:arrr+"?ac=videolist&ids="+url+\`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDom(html,"rss&&pic&&Text");items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\\\s\\\\S]*?<\\\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\\\?wsSecre[\\\\s\\\\S]*?wsTime=\\\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\\\n")[1].split("\\\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split(\\\\'"\\\\')[0]);url!=""?url:src.split(\\\\'"\\\\')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\\\\'\\\\"](.*?)[\\\\'\\\\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);\`,col_type:"movie_1"});}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_3"});}}}
//结束第一页分类处理
//对列表处理开始
var list=parseDomForHtml(html,"rss&&Html").match(/<video>[\s\S]*?<\/video>/g);
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text"); 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
var last = parseDomForHtml(list[j],"body&&last&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
if(typ.indexOf("伦理")==-1&&typ.indexOf("福利")==-1&&typ.indexOf("写真")==-1&&typ.indexOf("VIP")==-1&&typ.indexOf("美女")==-1&&typ.indexOf("里番")==-1&&typ.indexOf("性感")==-1&&typ.indexOf("倫理")==-1&&typ.indexOf("论理")==-1){
items.push({
title:title+"状态："+note,
desc:last+"类型："+typ,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:var res = {};var items = [];var html = getResCode();try{var thumb = parseDom(html,"rss&&pic&&Text");items.push({title: '剧情简介：',desc:parseDomForHtml(html, "rss&&des&&Text"),pic_url:thumb,    url:thumb,col_type: 'pic_1'});var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\\s\\S]*?<\\/dd>/g);var url=parseDomForHtml(html,'rss&&id&&Text');if(getUrl().indexOf('qy-video')!=-1){var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';var fetc=fetch(fet,{});var jsurl=parseDom(fetc,'.container2&&script&&Html');eval(jsurl);var sec=mac_url.match(/\\?wsSecre[\\s\\S]*?wsTime=\\d*/g)}for(var i = 0;i<conts.length;i++){  var list=conts[i].split(">\\n")[1].split("\\n<")[0].split("#");if(list!=null){items.push({			title:parseDomForHtml(conts[i], "body&&dd&&flag"),col_type: 'text_1'	});		var url={};for(var j = 0; j<list.length; j++){if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}if(getUrl().indexOf('qy-video')!=-1){url=url+sec}if(getUrl().indexOf('rrzyw')!=-1){url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url}items.push({title:list[j].split('$')[0], url:url.replace(/\\n*/g,'')+'@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split(\\'"\\')[0]);url!=""?url:src.split(\\'"\\')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}',col_type: 'text_2'});}}}} catch(e) {}res.data=items;setHomeResult(res);`,
col_type:"text_1"});
}}
//对列表处理结束
res.data=items;
setHomeResult(res);
}
function jhsserji() {
var res = {};
var items = [];
var html = getResCode();
//setError(html);
try{
var thumb = parseDom(html,"rss&&pic&&Text");
items.push({
title: '剧情简介：',
desc:parseDomForHtml(html, "rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type: 'pic_1'
});
var conts=parseDomForHtml(html,'rss&&dl&&Html').match(/<dd[\s\S]*?<\/dd>/g);
var url=parseDomForHtml(html,'rss&&id&&Text');
if(getUrl().indexOf('qy-video')!=-1){
var fet ='http://qy-video.com/?m=vod-play-id-'+url+'-src-1-num-1.html';
var fetc=fetch(fet,{});
var jsurl=parseDom(fetc,'.container2&&script&&Html');
eval(jsurl);
var sec=mac_url.match(/\?wsSecre[\s\S]*?wsTime=\d*/g)
}
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
if(list!=null){
items.push({
title:parseDomForHtml(conts[i], "body&&dd&&flag"),
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){
url=list[j].split('$')[1];
}else{
url=list[j].split('$')[0];
}
if(getUrl().indexOf('qy-video')!=-1){
url=url+sec
}
if(getUrl().indexOf('rrzyw')!=-1){
url='https://www.rrzyw.cc/rrm3u8/index.php?url='+url
}
items.push({
title:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input;if(src.indexOf("html")!=-1){var jiek="http://39.maosp.me/jx/?url=";var fileUrl="https://gitee.com/lzk23559/public_folder/raw/master/maojx.js";var js=fetch(fileUrl,{});eval(js);var url=Maosp.toUrl(jiek+src.split('"')[0]);url!=""?url:src.split('"')[0];}else if(input.indexOf("share")!=-1){var link=input.split("/share")[0];var fc=fetch(input,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(input.indexOf("rrzyw")!=-1){fetch(input,{}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(input.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(input.split("&")[0]));}else{src}`,
col_type: 'text_2'});
   }
  }
 }
} catch(e) {}
res.data=items;
setHomeResult(res);
}