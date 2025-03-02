#! /bin/bash
#set -x
#https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
get_coord(){
  address=${1// /+}
  base="https://maps.googleapis.com/maps/api/geocode/json?address="
  apikey="AIzaSyDZxNbKK_lMZhrr2jytCEjCbXb0RFYcv7Q"
  url="${base}${address}&key=${apikey}"
  #curl -sL $url |jq -cr '.results[0].formatted_address, .results[0].geometry.location'
  curl -sL $url |jq -cr '.results[0]'
}
get_coord $1 | jq -cr '.formatted_address, .geometry.location'


