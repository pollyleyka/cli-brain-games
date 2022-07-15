install:
	npm ci

brain-games:
	node bin/brain-games.js

publish: 
	npm publish --dry-run

cli:
	node src/cli.js

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calk:
	node bin/brain-calk.js