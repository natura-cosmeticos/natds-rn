# Code Quality

To make our development experience easier and have some security that your changes did not impact other components, we have some guidelines for code quality.

>It is a good practice to make this checks locally before opening a pull request.

## Tests

- All the components sould have tests
- All the code logic should be testes unitarily
- Components styles can be tested with snapshots

Related commands:
`test`: will run all tests
`test:watch`: will run the tests and watch for changes

## Lint

We use eslint with the base rules defined in the `@naturacosmeticos/eslint-config-natura` with a few customizations.

Related commands:
`lint`: will check for code styling errors
`lint:fix`: will check for code styling errors and try to fix it

## Typechecking

We use typescript as it help us a lot to document our code and cach mistakes.
Make shure to add type notations to your code and tests, and to fix any type errors

Related commands:
`tsc`: will check for type errors

## Commit lint

This ensure that our commits are in the right format, with the minimun needed information. Read more about it [here](./Commiting.md)

> This is the only not optional script and it will run un every commit as a pre-commit hook

Related commands:
`cm`: will open an interactive guide to help you commit
