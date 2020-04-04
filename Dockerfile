FROM nginx:1.16-alpine

LABEL maintainer="Victor Cornejo <rex2002xp@gmail.com>"

COPY ./default.conf /etc/nginx/conf.d/

COPY ./dist/ticket-admin/ /usr/share/nginx/html/

