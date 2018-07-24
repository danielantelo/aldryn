# make package VERSION=
package:
	rm -rf web/bundles var/cache var/logs var/sessions && \
	zip -r $(VERSION).zip app bin composer.json composer.lock Makefile src var web -x "*.DS_Store"

assets-install:
	bin/console ckeditor:install && bin/console assets:install
