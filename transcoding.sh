#!/bin/bash


# get_object_signed_url=${/app/getobjecturl}
# put_object_signed_url=$



#  converting  the video stream into the 360p video file format 
ffmpeg -i $get_object_signed_url -vf scale=360:360 -f mpegts - | curl -X PUT --data-binary @- "$put_object_signed_url_360"
ffmpeg -i $get_object_signed_url -vf scale=360:720 -f mpegts - | curl -X PUT --data-binary @- "$put_object_signed_url_720"
ffmpeg -i $get_object_signed_url -vf scale=360:480 -f mpegts - | curl -X PUT --data-binary @- "$put_object_signed_url_480"

echo "task is completed"


