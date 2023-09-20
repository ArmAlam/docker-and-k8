## DOCKER COMMANDS

Here are the list of commands that are used while wokring with docker.

- **docker ps .** -- List all the running containers.

- **docker ps -a .** -- List all the running and stopped containers.

- **docker images .** -- List all images.

- **docker build .** -- Creates a docker image from a Docker file.

- **docker run -p 3000:3000 <image>** -- Creates a new container. Here <image> can be image name or image id and -p 
    maps localhost's port with container port. localhostPort:containerPort

- **docker start <container_id>.** -- Starts a container.

- **docker stop <container_id>.** -- Stops a running container.

- **docker attach <container_id>.** -- Attaches to console.

- **docker run -p 8000:8000 -d <image_id>.** -- Runs a container in detach mode.

- **docker logs -f <container_id>.** -- Show console log.

- **docker rm <container_id>.** -- Removes a container.

- **docker rmi <image_id>.** -- Removes an image.

- **docker container prune** -- Removes all stopped containers.

- **docker image prune** -- Removes all unused images.

- **docker run -p 3000:80 -d --rm <image_id>** -- Automatically removes a container when it stops.

- **docker image inspect <image_id>** -- Shows image configuration.

- **docker run -p 3000:80 -d --name <container_name> <image_id>** -- Sets container name.

- **docker build -t <image_name:tag> .** -- Sets image name known as repository with an optional tag.






