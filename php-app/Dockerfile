FROM php:7-fpm-alpine

# install deps
RUN apk --update add nodejs curl && \
  curl -sS https://getcomposer.org/installer | php \
  && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer
RUN apk add --no-cache zlib-dev freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev && \
  docker-php-ext-configure gd \
    --with-gd \
    --with-freetype-dir=/usr/include/ \
    --with-png-dir=/usr/include/ \
    --with-jpeg-dir=/usr/include/ && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  docker-php-ext-install -j${NPROC} gd && \
  apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev
RUN docker-php-ext-install pdo pdo_mysql zip

# build app
WORKDIR /var/www/project
COPY . .
# ENV SYMFONY_ENV=prod #--no-dev --optimize-autoloader  --no-ansi
RUN composer install \
  && npm i \
  && npm run build \
  && bin/console ckeditor:install \
  && bin/console assets:install

# fix perms
RUN chmod -R 777 /var/www/project/var/*
RUN chmod -R 777 /var/www/project/web/media/*

# cleanup
RUN rm -rf node_modules

VOLUME ["/var/www/project"]
