cd ./wind
mkdir tem
cd tem


curl --connect-timeout 10 -O https://gitea.com/wkyilisha/m/raw/branch/main/ff.json || echo "Link ff doesn't exist"   
curl --connect-timeout 10 -O http://www.mikkk.xyz/m.json || echo "Link m doesn't exist"   

grep -lrIZ '404 Not Found'. | xargs -0 rm -rf --
grep -lrIZ '失败'. | xargs -0 rm -rf --

grep -rl . -e '失败' | xargs rm --
grep -rl . -e '资源' | xargs cp -t ..
cd ..
rm -rf tem





