# Docker 🐳

## What is Docker 😄

> - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines. Containers are created from images that specify their precise contents. Images are often created by combining and modifying standard images downloaded from public repositories.

## Why do you need docker

> - to solve the compatibility issue between different operating systems and different versions of the same operating system and different environments and different versions of the same environment
>
> - Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

## What can it do

> - with docker you can run each service in a separate container with its own dependancies and libraries ,and each container will have its own IP address and port number. This means that you can run multiple instances of the same service on the same server without any conflicts. This is a huge advantage over running multiple instances of the same service on the same server using virtual machines.

## What are Containers

> - container is completely isolated environment for running applications and each container has its own process space, network interface, and filesystem. Containers are lightweight because they don’t need the extra load of a hypervisor, but they all share the os kernel. This means they require less memory than virtual machines (VMs). Containers are also more portable and efficient. You can build images locally, store them in a private registry, and deploy them to any infrastructure that supports Docker containers.
>
> - A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

## Container vs Image

> - An image is a read-only template with instructions for creating a Docker container. A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can commit your container’s changes into a new image using the Docker commit command. You can push and pull images from Docker registries.

## Docker Commands

> ### - RUN
>
> 1- Run or start a container
>
> ```
>    docker run 'image name'
> ```
>
> 1.1- Run a version of an image
>
> ```
>    docker run 'image name':'tag'
>
> # if you don't specify the tag then the latest version will be used ny default
> ```
>
> 1.2- Run STDIN
>
> ```
>    docker run -i 'image name'
>
> # this command will run the container and will allow you to execute commands inside the container
> ```
>
> ```
>    docker run -it 'image name'
>
>       # this command will run the container and will allow you to execute commands inside the container and will attach to the container
> ```
>
> 1.3- Append a command
>
> ```
>    docker run 'image name' 'command'
> ```
>
> 1.4- Run a container in the background
>
> ```
>    docker run -d 'image name'
> ```
>
> 1.5- Run a container in the foreground
>
> ```
>    docker run -it 'image name'
>
>       # this command will run the container and execute the command inside the container
> ```
>
> 1.6- Run a container in the foreground and attach to it
>
> ```
>    docker attach 'container id/name'
>
>      # this command will attach to a running container and will allow you to execute commands inside the container
> ```
>
> 1.7- Run - PORT MAPPING
>
> ```
>    docker run -p 'host port':'container port' 'image name'
>
>       # this command will run the container and will map the container port to the host port to allow the host to access the container port from outside the container
> ```
>
> 1.8- Run - VOLUME MAPPING
>
> ```
>    docker run -v 'host path':'container path' 'image name'
> ```
>
> ---
>
> ### - LIST
>
> 2- List containers
>
> ```
>    docker ps
> ```
>
> 2.1- List all containers
>
> ```
>   docker ps -a
> ```
>
> 2.2- List images
>
> ```
>    docker images
> ```
>
> ---
>
> ### - Stop a container
>
> ```
>   docker stop 'container id/name'
> ```
>
> ---
>
> ### - Remove a container
>
> ```
>   docker rm 'container id/name'
> ```
>
> ---
>
> ### - Remove an image
>
> ```
>   docker rmi 'image id/name'
>
>       # but you have to make sure that the image is not used by any container
> ```
>
> ---
>
> ### - Download an image
>
> ```
>   docker pull 'image name'
>
>       # also the image will be downloaded automatically when you run a container if the image is not already downloaded
> ```
>
> ---
>
> ### - Execute a command to a running container
>
> ```
>    docker exec 'container id/name' 'command'
>
>       # this command will run the container in the background and will return the container id
> ```
>
> ---
>
> ### - Inspect a container
>
> ```
>    docker inspect 'container id/name'
>
>       # this command will return the container details in a json format
> ```
>
> ---
>
> ### - Container logs
>
> ```
>    docker logs 'container id/name'
> ```
>
> ---
>
> ### - environment variables
>
> 1.1 - set environment variables
>
> ```
>    docker run -e 'environment variable name'='environment variable value' 'image name'
> ```
>
> 1.2 - set environment variables from a file
>
> ```
>    docker run --env-file 'environment variables file path' 'image name'
> ```
>
> 1.3 - inspect environment variables
>
> ```
>    docker inspect 'container id/name'
>
>       # this command will return the container details that contains the environment variables in a json format
> ```

## Create Docker image

### Dockerfile

- Docker file is a text written in a specific format that docker can understand and use it to build an image

- evert thing in the left in capital letters is a command or an instruction each instruction makes docker perform a specific task

- A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

- when you were buiding an image you were actually running a series of commands that were written in the docker file

- while building the image if any failure happens the image will not be created but docker will cache the previous steps/layers until the failure step and will not run the steps after the failure step

- when the faulure step is fixed and the image is built again docker will not run the steps that were already run before the failure step and will use the cached layers and run the failed step then the steps after the failure

## NetWorks in Docker

## Docker Compose

## Docker concepts in depth

## Docker Swarm

## Docker vs Kubernetes

each operating system consists of OS Kernel and a set of applications and libraries that are used to run the operating system

the os kernel is the core of the operating system and it is responsible for managing the hardware resources and the applications and libraries that are used to run the operating system
