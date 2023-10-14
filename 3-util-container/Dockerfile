FROM node:18-alpine

WORKDIR /app

#npm get prepended on a command 
# example docker run -it -v <folder_path>:/app <image_name> init
# npm in prepended before init command, which means npm init command will be execucated
ENTRYPOINT [ "npm" ]