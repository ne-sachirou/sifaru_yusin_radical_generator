.PHONY: help
help:
	@awk -F':.*##' '/^[-_a-zA-Z0-9]+:.*##/{printf"%-16s\t%s\n",$$1,$$2}' $(MAKEFILE_LIST) | sort

.PHONY: build
build: ## Build stuffs.
	poetry run npx webpack
	mv dist/* docs

.PHONY: format
format: ## Format everything.
	npx prettier --write *.js
	npx prettier --write *.json
	npx prettier --write *.md
	npx prettier --write docs/index.html
	npx prettier --parser yaml --write $(shell ag -g '\.yml$$' --hidden) .yamllint
	poetry run black main.py sifaru_yusin

.PHONY: start
start: ## Start a dev server.
	(cd docs && python -m http.server 5000)

.PHONY: test
test: ## Test everything.
	# npm audit
	poetry run yamllint $(shell ag -g '\.yml$$' --hidden) .yamllint
	poetry run flake8 main.py sifaru_yusin

.PHONY: upgrade
upgrade: ## Upgrade dependencies.
	npx npm-check-updates -u
	npm install
	npm fund
	poetry update
