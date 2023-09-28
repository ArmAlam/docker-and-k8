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

- **docker tag -t old_name:tag new_name:tag .** -- clone a new image using the old image, and named after the new tag.

- **docker volume ls .** -- list all volume.

- **docker run -d -p 3000:80 --rm --name <container_name> -v <volume_name>:<container_folder_path> <image_name> .** -- create a named volume.

- **docker run -d --rm -p 3000:80 --name <container_name> -v <volume_name>:<container_folder_path> -v "<host_machine_absoule_folder_path>:/<container_workdir>" -v /app/<persistent_file> <image_name> .** -- create bind mount volume. persistent_file needed to be mapped as anonymous volument. Otherwise can be removed/overwritten by bind mount. In BIND MOUNT, a folder get mapped to container.

- **docker run -d -p 3000:80 --rm --name <container_name> -e PORT=8000 <image_name> .** -- -e flag sets an environment variable. Multiple env vars can be used passing -e KEY=VALUE pairs.

- **docker run -d -p 3000:80 --rm --name <container_name> --env-file ./.env <image_name> .** -- use .env file as the environment variable file.

- **docker run -d -p 3000:80 --rm --name <container_name> --build-arg <argument_name>=<argument_value> <image_name> .** -- pass build time argument.

- **host.docker.internal** -- use host.docker.internal instead of localhost to communicate from container to localhost

- **172.17.0.1** -- use 172.17.0.1 instead of host.docker.internal while working on linux platform. host.docker.internal works only on windows and macOS.

- **docker container inspect <container_name>** -- inspect a container

- **docker network create <network_name>** -- creates a docker network.

- **docker run -d -p 3000:80 --network <network_name> <image_name> .** -- the created container is become a part of the network.

- **docker compose up ** -- pulls and builds images. reads docker yaml file and make container services with the given specification.

- **docker compose up -d ** -- pulls and builds images. reads docker yaml file and make container services with the given specification. Runs in detached mode

- **docker compose down ** -- stops container.



## TERMS

Two types of external data sources - 1. Volumes 2. Bind Mounts

- **volumes** -- volumes are folder on host machine hard drive which are mounted (made available, mapped) into containers.
  Volumes can persist data. A container can write data into a volume and can read data from it. Managed by docker and we don't know where in out host machine data are stored.

  Volumes are two types. 1) Anonymous volumes 2) Named volumes

  Anonymous volumes: automacially creates volumn in the host machine. Anonymous volumes are removed then containers are shut down. And recreated when container is created.

  Named volumes: A defined path in the container is mapped to the created volume/mount. Great for data persistent which
  don't need to edit directly. Named volume can't be created in the Dockerfile.

- **Bind Mounts** -- Mapped host machine code with container folder. Great for persistent and editable data

- **Docker Network** -- Container uses network to communicate from one container to another container in a host machine.
