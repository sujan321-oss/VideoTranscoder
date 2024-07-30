import boto3
import json

from signed_url import get_presigned_url

OUTPUT_BUCKET = "finalstoragebucket"


data = '''
{
    "Records": [
        {
            "eventVersion": "2.1",
            "eventSource": "aws:s3",
            "awsRegion": "ap-south-1",
            "eventTime": "2024-07-29T17:52:29.891Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
                "principalId": "A2ICZBAOYNLM01"
            },
            "requestParameters": {
                "sourceIPAddress": "104.28.220.192"
            },
            "responseElements": {
                "x-amz-request-id": "6X7WVBYEGE60AVVY",
                "x-amz-id-2": "B6sHvC1iosletfgqvEs72jXsxeuh2TRK0SbwUDheFR8An0QGDXb0BHPGNqUfwN9L3lelv+ckTXJtwV6FN1GDVHjOcQntsDiao+OoYXsbUT0="
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "5c934aea-6b6b-4633-b8d9-1a33761f0699",
                "bucket": {
                    "name": "directuploadvideotranscoder",
                    "ownerIdentity": {
                        "principalId": "A2ICZBAOYNLM01"
                    },
                    "arn": "arn:aws:s3:::directuploadvideotranscoder"
                },
                "object": {
                    "key": "371412383_6478044838952013_4771901778244704637_n+%281%29.mp4",
                    "size": 4473617,
                    "eTag": "a96efcb6a604dd946299b801f8e26e98",
                    "sequencer": "0066A7D6DDD4AD820A"
                }
            }
        }
    ]
}
'''

# Parse JSON data
event_data = json.loads(data)





def lambda_handler(event,context):
    # TODO implement
    
   
    
    # get the bucekt name 
    # get the key 
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']
    
    # get the signed url for the put_object for 3 format 480 360 720 180p and the get_object
    getobject_presigned_url = get_presigned_url(object_key,bucket_name)
    put_object_presignd_url_360p = get_presigned_url(str(object_key+"_360p"),OUTPUT_BUCKET,"put_object")
    put_object_presignd_url_480p = get_presigned_url(str(object_key+"_480p"),OUTPUT_BUCKET,"put_object")
    
    print(getobject_presigned_url)
    print(put_object_presignd_url_360p)
    
    # create the cluster 
    
    # create the  task defination 
    
    # run the task 
    
    
    
    
    
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }


