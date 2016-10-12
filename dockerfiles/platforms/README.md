Platforms in Docker
===================

TenTalk for CITRT 2016

# Prerequisites

- Download and install [Docker](https://www.docker.com/products/overview)
- Familarity with at least one of the following blogging/cms platforms.

# Starting Services

Just run `docker-compose up` inside on of the platforms directory. You
can add the `-d` flag for it run in `daemon` mode so you still have
access to your terminal window.

*Note: All web servers run on port `4000`*

# Wordpress

Uses the offical Wordpress Docker [image](https://github.com/docker-library/wordpress). The docker compose file mounts the `wp-content` directory into the container so you can work on themes or plugins without needing to restart the container.

# Jekyll

Also uses an offical Docker [image](https://github.com/jekyll/docker).
The docker compose mounts everything in the `/jekyll` directory into
the container.

# Hugo

Hugo builds from the Dockerfile included in the directory and mounts the
`/blog` directory into the container for development.

# Ghost

Ghost is also another community driven
[image](https://hub.docker.com/_/ghost/) and the docker-compose file
mounts the `/content` directory into the container. You may also want to
look into adding the `config.js` file into the container for addtional
customizations. For that to happen you'd have to add your own Dockerfile
that has something like:

```
FROM ghost:latest
ADD config.js /var/lib/ghost/config.js
```

# Pelican

Pelican builds from the Dockerfile included and mounts the `/blog`
directory into the `/src`. Pelican comes with a `Makefile` to make
managing pelican easier. The `run.sh` runs `make clean`, `make html`,
and `make serve` to start the pelican web server.

