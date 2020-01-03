install:
	npm install
	npm publish --dry-run
	npm link
start:
	npm run build
	npx babel-node dist/bin/brain-games.js
lint:
	npx eslint src