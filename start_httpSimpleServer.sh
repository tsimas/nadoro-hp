#! /bin/bash
PORT=10001
if [ $# -eq 1 ]
  then
    PORT=$1
fi
echo 'start server at port :' $PORT
python -m SimpleHTTPServer $PORT
