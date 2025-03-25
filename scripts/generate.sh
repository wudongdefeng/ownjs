cd ~/coding/live
mkdir tem
cd tem
curl -O https://raw.githubusercontent.com/wudongdefeng/iptv-tools/master/generate.js
curl -O https://raw.githubusercontent.com/wudongdefeng/iptv-tools/master/core.js
npm install iptv-playlist-parser

curl --connect-timeout 10 -O https://wds.ecsxs.com/221314.txt || echo "Link 221314 doesn't exist" 

curl --connect-timeout 10 -O https://raw.githubusercontent.com/zhyzjkpa/iptv/master/all2.txt || echo "Link all2 doesn't exist" 
       
curl --connect-timeout 10 -O https://raw.githubusercontent.com/40740/dianshi/main/0.txt || echo "Link 0 doesn't exist" 
curl --connect-timeout 10 -o 直播2.txt https://notabug.org/pglblb/tv/raw/master/直播2.js
curl --connect-timeout 10 -o xudong.txt https://notabug.org/xudong0518/tv/raw/master/zhibo.txt
  

curl --connect-timeout 10 -O https://wds.ecsxs.com/221609.json && mv 221609.json 221609.txt || echo "Link 221609 doesn't exist" 
curl --connect-timeout 10 -O https://raw.githubusercontent.com/Lnjrs520/njrs520-/main/lfy4482.txt || echo "Link lfy4482 doesn't exist"
#curl --connect-timeout 10 -O https://raw.githubusercontent.com/HasBahCa/m3u_Links/main/WEBCAM_CHINA.m3u && mv WEBCAM_CHINA.m3u WEBCAM_CHINA.txt || echo "Link WEBCAM_CHINA doesn't exist"
#sed -i "s/\#EXTM3U//g" WEBCAM_CHINA.txt || echo "no m3u"

#sed -i 's/\nhttp/,http/g' WEBCAM_CHINA.txt || echo "no m3u"
#sed -i "s/\#EXTINF:-1,//g" WEBCAM_CHINA.txt || echo "no m3u"
#cat WEBCAM_CHINA.txt
sed -i '/雪上霜/,$d' lfy4482.txt
node generate.js https://raw.githubusercontent.com/wwb521/live/main/tv.m3u fan.txt
node generate.js https://raw.githubusercontent.com/zbefine/iptv/main/iptv.m3u iptv.txt
node generate.js https://raw.githubusercontent.com/goolguy007/radioer/main/TVradio TVradio.txt

rm -rf *.js*
rm -rf node_modules
grep -lrIZ '404 Not Found'. | xargs -0 rm -rf --
grep -lrIZ '失败'. | xargs -0 rm -rf --

grep -rl . -e '失败' | xargs rm --
grep -rl . -e '卫视\|全国' | xargs cp -t ..
ls
#cp -r *.* ..
cd ..
rm -rf tem
ls -R *.txt > ../file.txt

sed -i "s#0.txt#40740,0.txt#g" ../file.txt
sed -i "s#liuwei.txt#六维,liuwei.txt#g" ../file.txt
sed -i "s#iptv.txt#zbefine,iptv.txt#g" ../file.txt
sed -i "s#WEBCAM_CHINA.txt#直播中国,WEBCAM_CHINA.txt#g" ../file.txt
sed -i "s#253.txt#253TV,253.txt#g" ../file.txt
sed -i "s#huoyan.txt#火焰TV,huoyan.txt#g" ../file.txt
sed -i "s#xinghuo.txt#小星火TV,xinghuo.txt#g" ../file.txt
sed -i "s#221314.txt#松鼠TV,221314.txt#g" ../file.txt
sed -i "s#xuancai.txt#炫彩TV,xuancai.txt#g" ../file.txt
sed -i "s#all2.txt#ALL-IPTV,all2.txt#g" ../file.txt
sed -i "s#221609.txt#晴天直播,221609.txt#g" ../file.txt
sed -i "s#lfy4482.txt#lfy4482,lfy4482.txt#g" ../file.txt
sed -i "s#tv2.txt#七彩直播,tv2.txt#g" ../file.txt
sed -i "s#CR.txt#综合直播,CR.txt#g" ../file.txt
sed -i "s#直播2.txt#pglblb,直播2.txt#g" ../file.txt
sed -i "s#xudong.txt#xudong,xudong.txt#g" ../file.txt
sed -i "s#hk.txt#honhkong,hk.txt#g" ../file.txt
sed -i "s#0415.txt#0415,0415.txt#g" ../file.txt
sed -i "s#shuixing.txt#水星,shuixing.txt#g" ../file.txt
sed -i "1i\#updated by wudongdefeng" ../file.txt

sed -i "s/\$c\_start//g" *.txt
sed -i "s/\$c\_end/\,\#genre\#/g" *.txt
sed -i '/群/d' *.txt
sed -i '/说明/d' *.txt
sed -i '/软件/d' *.txt
sed -i '/永久/d' *.txt
sed -i '/软件/d' *.txt
sed -i '/免费/d' *.txt
sed -i '/如有/d' *.txt    
sed -i '/收费/d' *.txt    
sed -i '/均为/d' *.txt
sed -i '/假冒/d' *.txt
sed -i '/机哥特制/d' *.txt
sed -i '/订阅专享/d' *.txt
sed -i '/感谢全球直播/d' *.txt
sed -i '/培 训 中  心/d' *.txt
sed -i '/点播机构研发/d' *.txt



       
sed -i '/tvbus\:/d' *.txt
sed -i '/mitv\:/d' *.txt
sed -i '/^[[:space:]]*$/d' *.txt



