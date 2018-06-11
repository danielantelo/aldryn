FROM php:7-fpm-alpine

# install deps
RUN docker-php-ext-install pdo pdo_mysql
RUN apk --update add nodejs curl && \
  curl -sS https://getcomposer.org/installer | php \
  && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/project

# build app
COPY . .
# ENV SYMFONY_ENV=prod #--no-dev --optimize-autoloader  --no-ansi
RUN composer install \
  && npm i \
  && npm run build

# fix perms
RUN chmod -R 777 /var/www/project/var/*
RUN chmod -R 777 /var/www/project/web/media/*

# cleanup
RUN rm -rf node_modules

VOLUME ["/var/www/project"]
