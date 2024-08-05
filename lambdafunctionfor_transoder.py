# import boto3
import json


from signed_url import get_presigned_url


from clients import ecs_client

OUTPUT_BUCKET = "finalstoragetrascodedvideo"
CLUSTER = "video_transcoder_cluster"
TASK_DEFINATION="video_transcoder_task_defination"


def lambda_handler(event,context):
   
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    # bucket_name = "khumapokharelgmail.comvideovtranscoder"

    print(bucket_name)
    object_key = event['Records'][0]['s3']['object']['key']
    # object_key="saney.mp4"

    print(object_key)
  

    getobject_presigned_url = get_presigned_url(object_key,bucket_name,"get_object")
    put_object_presignd_url_720p = get_presigned_url(str(object_key+"_720.ts"),OUTPUT_BUCKET,'put_object')
    put_object_presignd_url_360p = get_presigned_url(str(object_key+"_360.ts"),OUTPUT_BUCKET,'put_object')
    put_object_presignd_url_480p = get_presigned_url(str(object_key+"_480.ts"),OUTPUT_BUCKET,'put_object')

    
    print(getobject_presigned_url)
    print()
    print(put_object_presignd_url_360p)
    print()
    print( put_object_presignd_url_720p)
    print(put_object_presignd_url_480p )
    # print(put_object_presignd_url_480p)
    
    
    

    ecs_client.run_task(
        taskDefinition=TASK_DEFINATION,
        cluster = CLUSTER,
        launchType='FARGATE',
        count=1,
        networkConfiguration={
        'awsvpcConfiguration': {
            'subnets': [
                
                'subnet-06c200db60b5b55ac',
            ],
            'securityGroups': [
                'sg-020e90b8497e12a5e',
                
            ],
            'assignPublicIp': 'ENABLED'
        }
    },
       
        
    overrides ={
        'containerOverrides': [
            {
                'name': 'video_transcoder',
                'environment': [
                    {
                        'name': 'get_object_signed_url_360',
                        'value': getobject_presigned_url,
                    },
                    {
                        'name': 'put_object_signed_url_360',
                        'value': put_object_presignd_url_360p,
                        
                    },
                    
                    
                    {
                        'name': 'put_object_signed_url_480',
                        'value': put_object_presignd_url_480p,
                        
                    },
                    
                    {
                        'name': 'put_object_signed_url_720',
                        'value': put_object_presignd_url_720p,
                        
                    },
                ],
               
            }
        ],
    }
        
    )
    
    
    
    print("Task is running")

    
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }







# videro_trasncoder_container