# choose base image
FROM node:14-alpine

# set your working directory inside image
# all subsequent command inside docker relative to WORKDIR
WORKDIR /app

# copy content from parent machine to image
COPY ./package.json ./

# run command 
RUN npm i 

# Rather than copying the entire working directory, we are 
# only copying the package.json file. This allows us to take advantage of cached Docker layers
COPY . .

# By default container is isolated -> no external traffic can reach it
# This is just for documentation. To acutally expose we need to specify during 
# docker run .. -p <localport>:<container_exposed_port>
EXPOSE 8080

# specify command that will execute when someone tries
# to run this image.
# * this will not exceuted when image is created 
CMD ["npm", "start"]
