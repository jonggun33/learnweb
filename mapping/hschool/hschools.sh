#! /bin/bash
source ./geocode.sh
#set -x
infile="hschools.txt"
outfile="hschools.json"
echo "[" > $outfile
while read -r line; do
  IFS=':' read -r -a elements <<< "$line"
  #address=$(echo ${line}|cut -d: -f1,6 | tr ':' ' ')
  address="${elements[1]}"
  #echo $address
  school="{\"school\": {\"name\": \"${elements[1]}\", \"rank\": ${elements[0]}, \"kind\":\"${elements[2]}\", \"total\": ${elements[3]}} }"
  #echo $school
  #echo $school|jq .
  get_coord $address |jq ".+$school" | tee -a $outfile
  echo "," >> $outfile
done < $infile
echo "]" >> $outfile
