#!/bin/bash
files=$1

# 判斷使用者輸入大於0且為正整數
if [[ $files =~ ^-?[1-9]+$ ]]
then
  for ((i=1; i<=$files; i++))
  do
  touch $i.js
  echo 'create '$i'.js'
  done
else 
  echo '請輸入大於 0 整數'
fi

exit 0