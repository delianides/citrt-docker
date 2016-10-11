Docker
======

> Build, Run, and Ship Apps, Anywhere.

# What is Docker?

Docker is an open-source platform for creating, building, and running
scalable linux container applications by using a combination of images,
registries, and underlying APIs. Docker was first
[showcased](https://www.youtube.com/watch?v=wW9CAH9nSLs) at PyCon in
2013 by Solomon Hykes, the current CTO of Docker, Inc.

# Where do I Get Docker?

You can find information about installing Docker by going to
https://www.docker.com/products/overview. Downloading the version for
your OS should also include `docker-compose` and `docker-machine`. The
latest versions as of this writing are:

```
$ docker -v
Docker version 1.12.1, build 6f9534c
$ docker-compose -v
docker-compose version 1.8.0, build f3628c7
$ docker-machine -v
docker-machine version 0.8.1, build 41b3b25
```

# How Does Docker Work?

Docker takes advantage of a feature of linux that allows for
environments to be "sectioned" off from the rest of the host OS. These
sections or containers have their own file structure and permission
system that makes them almost independent from the host os. Containers
in linux have existed for awhile now but until Docker making them was
very time consuming and difficult to automate.

## CLI

The Docker CLI is well documented [here][docker-cli].

## Building Images and Docker Hub

In the next section I'll docker about dockerfiles but you should know
any understand the `docker build` command before. This command is what
turns a `Dockerfile` into an image. Once you have an image you can push
the image to an account on the [Docker Hub][dockerhub]. You can keep one
private image and as many public as you'd like or pay for additional
private repositories.

## Dockerfiles

To create a docker image you first need to start with a `Dockerfile`. Dockerfiles are comprised of a standard DSL that runs commands against the docker engine in order to build the image. The [documentation](https://docs.docker.com/engine/reference/builder/) about creating Dockerfiles very thorough so I will only describe the importance of three separate commands.

#### `FROM`

`FROM` designates a type of inheritance from which your docker image
will have everything that exists in the image as well. For example, the
following means the image will inherit from the base Ubuntu 14.04 image.

```docker
FROM ubuntu:14.04
```
The first part, `ubuntu` is the image name. The second, `14.04` is the
tag of that particular image. Images can have multiple tags which can
act like particular versions of that image. Going back to the [Ubuntu](https://hub.docker.com/_/ubuntu/) shows that you can reference this image by its Ubuntu version number (`14.04`) or by its name (`trusty`).

You must be very careful where you base your images from. Docker has
many supported images on [DockerHub][dockerhub] which can be trusted.
Don't base your images on other public ones which can be insecure.

Recently Docker has annouced that all the base language or framework
type images will, by default, be based on [Alpine
Linux](https://www.alpinelinux.org/). The benefit of this change means
smaller docker images. For example, look at the image sizes compared to
the Ubuntu image I mentioned before.

```
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              trusty              f2d8ce9fa988        13 days ago         187.9 MB
alpine              latest              ee4603260daa        2 weeks ago         4.803 MB
```

It might not seem like a big deal, but it really is. The smaller your
images are the better.

#### `CMD` and `ENTRYPOINT`

`CMD` is the final command your image will use to start up with when
it becomes a container. So something like `apachectl start` or `nginx -g`. `ENTRYPOINT` is basically the same thing but you can pass additional flags to the command. For example, maybe you're having trouble getting a webserver to start up; you can pass some kind of debug flag on the end of your `docker run` command which gets passed into the container when it starts up.

# Docker in Production

Obviously the end goal is to run Docker in a production environment.
Fortuately over the past couple of years there have been great efforts
to make this as simple as possible. Microsoft has recently annouced that
Windows Server 2016 will come with Docker preinstalled. Many cloud
computing platforms have first class integration with Docker, others
have detailed documentation for running Docker within their platform.

### Kubernetes

Google has actually been running containers for awhile. They developed
a system orignally called Borg that was the inspiration for
[Kubernetes][kubernetes] (K8s) open source project. K8s is made of
several different parts; a scheduler, controller, dns management, and an
API Server.

You can read the getting started docs [here](http://kubernetes.io/docs/getting-started-guides)

### Rancher

[Rancher][rancher] is another platform for running containers in
production. If you prefer a GUI to manage everything then this is what
you'd want. They have a catalog of applications with one-click installs
available and its by far the fast way to start running Docker in
project. Furthermore, you can actually use Kubernetes as its back-end
and use the Rancher UI to manage containers.

### Amazon ECS

[Amazon ECS][amazon-ecs] is a container service provided through the AWS
suite of services. Its also a pretty simple platform and can be managed
and maintained through the AWS portal but just like every other AWS
service, it has a full API to back it. We are currently using ECS at
NewSpring to run Docker in production. We have found its simplicity and
customizations convient and its extremely reliable. Containers are built
into `Services` and can connect to other tools AWS offers such as
Elastic Block Storage and Elastic Load Balancing.

# What OS Should I Run Docker On?

### CoreOS

[CoreOS][coreos] was born from an idea that you could run everything you need
entirely from Docker containers.  It's an extremly small OS weighing in
at only 256MB and comes with Docker preinstalled. This is the OS
NewSpring uses to run Docker in production.

### RancherOS

RancherOS is backed by Rancher Labs which also maintains the
[Rancher][rancher] UI mentioned above. It takes the vision of running
a minimal OS to just run Docker to the extreme. The OS weighs in at
a feather light 41MB. Its a really simple OS to just play around with
Docker on another platform but capable of running production
environments.

# Further Research

[Docker 101](https://blog.docker.com/2016/05/docker-101-getting-to-know-docker/)

[The Willy Wonka of Containers](https://www.youtube.com/watch?v=GsLZz8cZCzc) - Fun video showcasing exactly what you can do with Docker.

[Rancher Overview](https://www.youtube.com/watch?v=HQ4nT8dnvJc)

[Getting Started With Kubernetes](https://www.youtube.com/watch?v=_vHTaIJm9uY)

# Collaboration

Please feel free to open issues up here with things you've helpful or
questions you might have about utilizing Docker in environments.

[dockerhub]: https://hub.docker.com/
[docker]: https://www.docker.com/
[docker-cli]: https://docs.docker.com/engine/reference/commandline/cli/
[download-docker]: https://www.docker.com/products/overview
[kubernetes]: http://kubernetes.io/
[rancher]: http://rancher.com/
[amazon-ecs]: http://aws.amazon.com/ecs







