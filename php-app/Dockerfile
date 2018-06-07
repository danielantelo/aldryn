FROM php:7-fpm-alpine
RUN docker-php-ext-install pdo pdo_mysql

# install composer
RUN apk update && apk add curl && \
  curl -sS https://getcomposer.org/installer | php \
  && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer

# install node
RUN apk add --update nodejs

# build app
WORKDIR /var/www/project
COPY . .
RUN composer install \
  && npm i \
  && npm run build

# cleanup
RUN rm -rf node_modules
# RUN composer install --no-ansi --no-dev --no-interaction --no-progress --no-scripts --optimize-autoloader

VOLUME ["/var/www/project"]
