# This Makefile uses the following NPM utilities.
# * https://npmjs.org/package/jslint
# * https://npmjs.org/package/js-beautify

browser = firefox
targets = beautify jslint tests
jsfiles = ../apod.js ../tests/tests.js ../examples/examples.js

options-jsb = -rqjs 2
options-vim = -E -c "normal gg=G" -c "wq" --

.PHONY: all-no-tests all newline $(targets)

all-no-tests: newline beautify jslint

all: newline $(targets)

newline:
	@echo

# Use a combination of js-beautify and Vim to beautify code. The former gets
# gets almost everything right, the latter fixes indentation issues.
beautify:
	@echo "Beautify"
	@echo "========"
	@for file in $(jsfiles); do \
		js-beautify $(options-jsb) -f $$file; \
		vim $(options-vim) $$file > /dev/null; \
		echo "Beautified: $$file"; \
	done
	@echo

jslint:
	@echo "JSLint"
	@echo "======"
	@for file in $(jsfiles); do \
		jslint $$file | tail -n +2; \
	done
	@echo

tests:
	@echo "Tests"
	@echo "====="
	@echo "Tests launched in browser."
	@$(browser) tests/index.html &
	@echo
