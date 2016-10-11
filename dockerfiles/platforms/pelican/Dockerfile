FROM python:3.3-alpine

MAINTAINER Drew Delianides

RUN apk -U add --virtual deps build-base python-dev zlib-dev jpeg-dev \
    make \
    py-pip \
    && pip install pelican markdown pelican-gist typogrify docutils beautifulsoup4 pillow \
    && apk del --purge deps build-base python-dev jpeg-dev zlib-dev \
    && apk -U add libjpeg \
    && rm -rf /var/cache/apk/*

WORKDIR /blog

CMD pelican content
