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
    put_object_presignd_url_360p = get_presigned_url("suajn.ts",OUTPUT_BUCKET,'put_object')
    put_object_presignd_url_480p = get_presigned_url("kp.jpeg",OUTPUT_BUCKET,'put_object')
    
    print(getobject_presigned_url)
    print()
    print(put_object_presignd_url_360p)
    print()
    print(put_object_presignd_url_480p)
    
    
    

    ecs_client.run_task(
        taskDefinition=TASK_DEFINATION,
        cluster = CLUSTER,
        launchType='FARGATE',
        count=1,
        networkConfiguration={
        'awsvpcConfiguration': {
            'subnets': [
                'subnet-0674c54b50ab4c621',
            ],
            'securityGroups': [
                'sg-00322f624a5d37fa1',
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
                        'name': 'get_object_signed_url',
                        'value': getobject_presigned_url,
                    },
                    {
                        'name': 'put_object_signed_url',
                        'value': put_object_presignd_url_360p,
                        
                    }
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



# lambda_handler("","")



# videro_trasncoder_container