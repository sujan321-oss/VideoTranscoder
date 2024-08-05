#!/bin/bash

# update the function
aws lambda update-function-code --function-name video_transcoder_lambda --zip-file fileb://lambda_test_function.zip

echo "function is updated"
