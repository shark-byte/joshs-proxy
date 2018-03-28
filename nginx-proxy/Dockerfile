# What image do you want to start building on?
FROM nginx

COPY ./public /public
COPY ./scripts /scripts
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
CMD /scripts/nginx.sh
