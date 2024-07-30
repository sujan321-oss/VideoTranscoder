
from clients import s3_client


def get_presigned_url(filename:str,bucket:str,method="get_object")->str:
    try:
       
        response = s3_client.generate_presigned_url(
           method,
           Params = {
               'Bucket' : bucket,
               'Key' : filename
           }
        )
        
        return response
            
    except Exception as e:
        print(e)
        
        
        
        