# Create and run a container from image and enter its shell 

`docker run -it --name "<provide a new container name>" --entrypoint /bin/sh <image>` 

# Start container with shell

`docker container start -i <container>`

   - REF: https://docs.docker.com/engine/reference/commandline/container_start/

# Modify docker image

   - REF: https://stackoverflow.com/questions/27105112/howto-modify-an-docker-image-that-was-created-from-an-existing-one

# Copy files to running container

`docker cp <source file> <container>:<target path>`

   - REF: https://stackoverflow.com/questions/22907231/copying-files-from-host-to-docker-container

# Copy files from running container

`docker cp <container>:<source file> <target path>`

  - REF: https://stackoverflow.com/questions/22907231/copying-files-from-host-to-docker-container


# Remove unused containers

`docker container prune`

 - REF: https://docs.docker.com/config/pruning/

# Remove unused images

`docker image prune`

 - REF: https://docs.docker.com/config/pruning/

# Remove all containers

`docker rm $(docker ps -a -q)`

# Remove all images

`docker rmi $(docker images -a -q)`

# Export running container

`docker export <container> | gzip > <container name>.gz`

# Import an exported container as image

`zcat <container name>.gz | docker import - <provide a new image name>`