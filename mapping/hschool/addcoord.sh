#! /bin/bash
source ./geocode.sh

while read -r line; do
  IFS=':' read -r -a elements<<<"$line"
  name="${elements[0]}"
  ret=$( get_coord $name)
  address=$(echo $ret|jq '.formatted_address')
  lat=$(echo $ret|jq '.geometry.location.lat')
  lng=$(echo $ret|jq '.geometry.location.lng')
  echo "${line}:${address}:${lat}:${lng}" | tee -a $2
  sleep 1
done < $1
