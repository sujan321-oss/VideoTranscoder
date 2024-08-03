FROM --platform=linux/amd64 ubuntu:20.04


# Update package lists and install curl and ffmpeg
RUN apt-get update && apt-get install -y \
    curl \
    ffmpeg

# Copy the transcoding script and make it executable
COPY transcoding.sh /transcoding.sh
RUN chmod +x /transcoding.sh



# Set the default command to run the transcoding script
CMD ["sh", "/transcoding.sh"]
