

ensure-dependencies:
	@echo "Ensuring docker is installed..."
	@docker info

brand:
	@echo "Creating our gs-skill-matrix-frontend manifest file..."
	@node_modules/make-manifest/bin/make-manifest
	@cat ./manifest.json

package:
	@echo "Building our gs-skill-matrix-frontend docker image..."
	@docker build --tag gs-skill-matrix-frontend .
	@docker images

qa:
	@echo "Checking that our gs-skill-matrix-frontend tests dont fail..."
	@npm run qa