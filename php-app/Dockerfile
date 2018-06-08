FROM php:7-fpm-alpine
RUN docker-php-ext-install pdo pdo_mysql

# install deps
RUN apk --update add nodejs curl && \
  curl -sS https://getcomposer.org/installer | php \
  && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer

# build app
WORKDIR /var/www/project
ENV SYMFONY_ENV=prod
COPY . .
RUN composer install --no-dev --optimize-autoloader  --no-ansi \
  && npm i \
  && npm run build

# cleanup
RUN rm -rf node_modules

# logs and cache fix
RUN chmod -R 777 /var/www/project/var

VOLUME ["/var/www/project"]
