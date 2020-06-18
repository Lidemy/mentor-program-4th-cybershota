#!/bin/bash
#這樣好作弊喔我真的要笑死，竟然可以這樣
username=$1
touch temp.js
echo 'let data =' > temp.js
curl -s GET "https://api.github.com/users/${username}" >> temp.js
echo 'console.log(`${data.name}\n${data.url}\n${data.location}\n${data.bio}\n${data.created_at}`)' >> temp.js
node temp.js
killall node
rm temp.js
exit 0
