import boto3
from botocore.exceptions import ClientError
from botocore.client import Config
# Initialize S3 client
from clients import s3_client



def get_presigned_url(filename: str, bucket: str, method:str, expiration=9000) -> str:
    try:
        response = s3_client.generate_presigned_url(
            ClientMethod=method,
            Params={
                'Bucket': bucket,
                'Key': filename
                
            },
            ExpiresIn=expiration
        )
        return response
    except ClientError as e:
        print(e)
        return None
