## Node utility container to setup node project without installing node on host machine

1. Docker build -t node-util .
2. docker run -it -v <project_path>:/app node-util npm init // this will initialize an empty project
