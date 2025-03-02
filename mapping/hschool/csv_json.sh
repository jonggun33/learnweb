#! /bin/bash

cat $1 | python3 -c 'import sys, pandas;print(pandas.read_csv(sys.stdin,delimiter=":").to_json(orient="records"))'  > $2
