install:
	pnpm install
.PHONY: install

update-internal:
	pnpm update "@breeze32/*" --latest
.PHONY: update-internal-packages

publish:
	git add .
	git commit -m $(COMMIT_MESSAGE)
	pnpm version $(VERSION)
	pnpm publish --access public
.PHONY: publish

push:
	git add .
	git commit -m $(COMMIT_MESSAGE)
	git push
.PHONY: publish