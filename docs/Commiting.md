# Commits

This project follows the [conventional commits](https://www.conventionalcommits.org) guidelines to automate our version management and changelog generation.
A pre-commit hook runs [commit lint](https://commitlint.js.org/) before every commit to ensure commit consistency.
If you need some help commiting, try running `git cz` to commit using the [commitizen](https://github.com/commitizen/cz-cli) tool.

> Be sure to check out those links for more information on how conventional commits guidelines and tools

## Commit requirements

- A commit message should follow the conventional commits guidelines
- A commit message should include an jira issue number (DSY-*)

> Are you a developer from outside Natura organization and does not have an jira issue?
> [Contact us](https://github.com/natura-cosmeticos/natds-rn/issues)

### Commit Examples

```sh
docs: update readme, move contributing section to new file
DSY-778


chore(dialog): add max-width and actionsAlignment prop

DSY-793


feat(button): add button component

co-author: @somebody
DSY-766
```
