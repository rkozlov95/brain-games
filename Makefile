install:
	npm install
	npm publish --dry-run
	npm link
start:
	npx babel-node src/bin/brain-games.js
lint:
	npx eslint src