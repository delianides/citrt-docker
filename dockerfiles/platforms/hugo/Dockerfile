FROM alpine:latest
MAINTAINER Drew Delianides

ENV HUGO_VERSION 0.17
RUN apk --update add ca-certificates py-pygments py-setuptools wget && rm -rf /var/cache/apk/*

RUN wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  mv hugo_${HUGO_VERSION}_linux_amd64/hugo_${HUGO_VERSION}_linux_amd64 /usr/local/bin/hugo && \
  chmod +x /usr/local/bin/hugo && \
  mkdir /blog

WORKDIR /blog
EXPOSE 1313

ENTRYPOINT ["/usr/local/bin/hugo"]

