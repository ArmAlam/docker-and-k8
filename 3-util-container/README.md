## Node utility container to setup node project without installing node on host machine

1. Docker build -t node-util .
2. docker run -it -v <project_path>:/app node-util npm init // this will initialize an empty project
3. In a docker-compose file, docker compose run <service_name> <command> will executes a command. For example
    "docker compose run npm init" npm is the service name in compose file and init it the extended command.