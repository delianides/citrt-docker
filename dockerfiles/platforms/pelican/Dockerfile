FROM alpine:latest

MAINTAINER Drew Delianides

RUN apk -U add python python3 perl make && apk -U add --virtual deps py-pip \
      && pip3 install pelican Markdown \
      && apk del deps \
      && rm -rf /var/cache/apk/*

# VOLUME /src
# WORKDIR /src

COPY run.sh run.sh
RUN chmod +x run.sh

CMD ["/bin/sh", "run.sh"]
