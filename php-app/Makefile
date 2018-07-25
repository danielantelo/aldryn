# make package VERSION=
package:
	rm -rf web/bundles var/cache var/logs var/sessions app/config/parameters.yml \
	&& cp app/config/parameters.prod.yml app/config/parameters.yml \
	&& zip -r $(VERSION).zip app bin composer* Makefile src var web -x "*.DS_Store"

assets-install:
	bin/console ckeditor:install && bin/console assets:install
