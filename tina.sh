curl -L https://github.com/onweru/newsroom/archive/refs/heads/master.zip -o cms.zip
unzip cms.zip "newsroom-master/exampleSite/*" -d ./cms
mkdir temp
mv cms/newsroom-master/exampleSite/* temp
rm -rf cms
mv temp/tina tina
mv temp/package.json package.json
mv temp/.env .env
rm -rf temp
rm cms.zip