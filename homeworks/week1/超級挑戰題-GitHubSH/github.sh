#!/bin/bash
username=$1

curl -s GET "https://api.github.com/users/${username}" | jq -r '.avatar_url,.name,.bio,.location,.url'

exit 1
