.PHONY: help
help:
	@awk -F':.*##' '/^[-_a-zA-Z0-9]+:.*##/{printf"%-16s\t%s\n",$$1,$$2}' $(MAKEFILE_LIST) | sort

.PHONY: build
build: ## Build stuffs.
	(cd sifaru_yusin && java -cp "$(shell pwd)/sifaru_yusin/antlr-4.8-complete.jar:$$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript DekuRule.g4)
	poetry run npx webpack
	mv dist/* docs

.PHONY: clean
clean: ## Clean built stuffs.
	rm -v sifaru_yusin/DekuRule*.js sifaru_yusin/*.interp sifaru_yusin/*.tokens
	rm -rfv __target__

.PHONY: format
format: ## Format everything.
	npx prettier --write *.js
	npx prettier --write *.json
	npx prettier --write *.md
	npx prettier --write docs/index.html
	npx prettier --parser yaml --write $(shell ag -g '\.yml$$' --hidden) .yamllint
	poetry run black main.py sifaru_yusin

.PHONY: setup
setup: ## Setup a development environment.
	poetry install
	npm install
	(cd sifaru_yusin && curl -O https://www.antlr.org/download/antlr-4.8-complete.jar)

.PHONY: start
start: ## Start a development server.
	(cd docs && python -m http.server 5000)

.PHONY: test
test: ## Test everything.
	npm audit
	poetry run yamllint $(shell ag -g '\.yml$$' --hidden) .yamllint
	poetry run flake8 main.py sifaru_yusin

.PHONY: upgrade
upgrade: ## Upgrade dependencies.
	npx npm-check-updates -u
	npm install
	npm audit fix
	npm fund
	poetry update
