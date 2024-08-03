#!/bin/bash


# get_object_signed_url=${/app/getobjecturl}
# put_object_signed_url=$



#  converting  the video stream into the 360p video file format 
ffmpeg -i $get_object_signed_url -vf scale=360:360 -f mpegts - | curl -X PUT --data-binary @- "$put_object_signed_url"

echo "task is completed"


