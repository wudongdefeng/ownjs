cd ./cat
mkdir tem
cd tem


curl --connect-timeout 10 -O https://gitea.com/wkyilisha/m/raw/branch/main/ff.json || echo "Link ff doesn't exist"   
curl --connect-timeout 10 -O http://www.mikkk.xyz/m.json || echo "Link m doesn't exist"   
curl --connect-timeout 10 -O https://notabug.org/laoo1976/cat/raw/master/mao.txt || echo "Link ff doesn't exist"   
curl --connect-timeout 10 -O https://gitea.com/AYOM/zhou/raw/branch/main/mao1.txt || echo "Link mao1 doesn't exist"   

grep -lrIZ '404 Not Found'. | xargs -0 rm -rf --
grep -lrIZ '失败'. | xargs -0 rm -rf --

grep -rl . -e '失败' | xargs rm --
grep -rl . -e '解析' | xargs cp -t ..
cd ..
rm -rf tem





