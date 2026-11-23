FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Copy all website assets, HTML, CSS, JS, and PHP into Apache document root
COPY . /var/www/html/

# Clean up unwanted server or dev files from container image
RUN rm -f /var/www/html/server.js /var/www/html/Dockerfile /var/www/html/docker-compose.yaml \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

EXPOSE 80
CMD ["apache2-foreground"]
