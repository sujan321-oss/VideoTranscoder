import boto3
from botocore.client import Config
s3_client = boto3.client('s3', 
                         region_name='us-east-1',
                         config=Config(signature_version='s3v4'))
ecs_client = boto3.client('ecs')