cd ~/coding/cat
mkdir tem
cd tem

curl --connect-timeout 10 -O http://www.mikkk.xyz/m.json || echo "Link m doesn't exist"   
curl --connect-timeout 10 -O https://notabug.org/laoo1976/cat/raw/master/mao.txt || echo "Link ff doesn't exist"   

grep -lrIZ '404 Not Found'. | xargs -0 rm -rf --
grep -lrIZ '失败'. | xargs -0 rm -rf --

grep -rl . -e '失败' | xargs rm --
#grep -rl . -e '影视|243' | xargs cp -t ..
cp -r *.* ..
cd ..
rm -rf tem





