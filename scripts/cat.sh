cd ~/coding/cat
mkdir tem
cd tem
curl --connect-timeout 10 -O https://gitea.com/kvymin/CatVodTVSpider/raw/branch/main/0606.json || echo "Link 0606 doesn't exist"   
curl --connect-timeout 10 -O http://www.mikkk.xyz/m.json || echo "Link m doesn't exist"   
curl --connect-timeout 10 -O https://notabug.org/laoo1976/cat/raw/master/mao.txt || echo "Link ff doesn't exist"   
curl --connect-timeout 10 -O https://gitea.com/AYOM/zhou/raw/branch/main/mao1.txt || echo "Link mao1 doesn't exist"   
curl --connect-timeout 10 -o m0.json https://pastebin.com/raw/Z23snh8Y || echo "Link mao0 doesn't exist"  

curl --connect-timeout 10 -O http://www.mikkk.xyz/m.json || echo "Link m doesn't exist"

curl --connect-timeout 10 -O https://raw.githubusercontent.com/sclodestar/freed/master/maooxp2.json || echo "Link xp doesn't exist"   


curl --connect-timeout 10 -O http://fangcun.atwebpages.com/mao.json || echo "Link ff doesn't exist"   

curl --connect-timeout 10 -o m1.json http://xiaoguozitv.cn/m.json || echo "Link m1 doesn't exist"   

curl --connect-timeout 10 -O http://xiaoguozitv.cn/redbull.json || echo "Link redbull doesn't exist"   
curl --connect-timeout 10 -O https://gitea.com/yirenxing/TVBOX/raw/branch/main/BOX/xinmao.json || echo "Link xinmao doesn't exist"   
curl --connect-timeout 10 -O https://github.com/liu673cn/biubiu/raw/main/bb.txt || echo "Link xinmao doesn't exist"

grep -lrIZ '404 Not Found'. | xargs -0 rm -rf --
grep -lrIZ '失败'. | xargs -0 rm -rf --

grep -rl . -e '失败' | xargs rm --
#grep -rl . -e '影视|243' | xargs cp -t ..
cp -r *.* ..
cd ..
rm -rf tem





