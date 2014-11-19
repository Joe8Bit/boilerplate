## Front-end Boilerplate

The purpose of this app is to put together a sensible default for producing very high quality front-end code, both from a presentation (SCSS) but mainly from a behaviour context (JavaScript and Angular).

From a build perspective there are several technologies involved:

* Gulp (task orchestration)
* PhantomJS (headless browser for automated testing)
* SCSS (Ruby) (to make CSS not suck)
* Karma (for running unit tests in the browser)
* Protractor (for running browser driven e2e tests)
* shmock (for mocking a REST JSON API)
* browsersync (for multi-device testing)
* bower and NPM (for package management)
* JShint, JSCS, node-complexity, SCSS Lint (for quality assurance)
* modrewrite (to support Angular in HTML5 mode)

## Running the application
There are several dependencies that need to be installed seperatley before the app can be run, they are:

* Ruby (>2.0) + Bundler (gem install bundler)
* PhantomJS
* NodeJS
* Git

```
git clone https://github.com/Joe8Bit/boilerplate.git
cd boilerplate
npm install && bower install && bundle install
gulp serve
```
This should get the app running locally with a development server.

## Testing the application
Testing is very important, in this app there are currently two broad types of automated tests: unit tests and E2E tests. Both of which are run with the headless browser PhantomJS.

### Unit tests
All of the files under `test/unit/**/*.js` are run using the following command:
```
gulp test
```

THe app currently require 100% (of statements, branches, functions and lines) unit test coverage for any new code contributed the application. This can tuned in the relevant Gulpfile.

Coverage reports are automatically generated in the `coverage` directory.

### E2E tests
All of the tests under `test/e2e/**/*.js` are run using the following command:
```
gulp protractor
```
Any user facing stories worked on must be represented with E2E tests in the application. Pull requests will not be accepted unless this is the case.

## Contributing to the application

### Code Quality
Code quality is very important, as a result of this we **enforce** quality standards across the application, these fall into several categories:

* **JSHint** (run: `gulp hint`) - to make sure we're using a consistant and predictable standard for our syntax
* **JSCS** (run: `gulp codestyle`) - to make sure we're following a set of community standard for syntax and architecture (based on Google's JS styleguide).
* **Complexity metrics** (run: `gulp complexity`) - to make sure we're writing maintainable code we run run complexity metrics (cyclomatic and Halstead complexity).
* **Documentation** (run: `npm docs`) - all code must be documented according to the DocBlock/JSDoc syntax
* **SCSS Linting** (run: `scss-lint`) - all SCSS must pass the linter before being committed

All of the above (and the unit tests) are run **before any commit can be made** to the repo. If any of them fail you will not be able to commit.

### Development flow
We follow the [Github Flow](http://scottchacon.com/2011/08/31/github-flow.html) model in writing software, which entails, when writing a new feature:

1. Update your local version of master
2. Branch master for just that feature, give it a sensible name that relates to that feature (e.g. `add-user-widget`)
3. Do you work
4. Make sure your work meets the code quality standards above
5. Commit it to your branch, please make sure you use intelligable and useful commit messages (e.g. `added unit tests for user-widget`)
6. Push your branch up to Github
7. Create a pull request from your branch into master.
8. Ask someone else to review it

Plese keep pull requests **small**, they should only do **one** thing. Break out your pull requests if you're branch does more than one thing.

Anyone can merge pull requests, but there are several things to bear in mind when doing so:

* You **must** validate that all unit tests and E2E tests pass, which means pulling the branch and running them yourself
* You **must** review the code for quality and architectural quality
* You **co-own** the quality of this code when you merge it, if it causes regressions you co own them

## Building the application
The application cen be built into it's final production state with the following command:

```
gulp build
```

## Application development

### Configuration and environments
The application can be configured for different environments using the `config/{environment}.json`. Default configs can be placed in `config/defaults.json` and are overwritten with the specific environment the app is being run in.

These are then available in the angular app by their top level key, please see `config/defaults.json` for examples, as constants that be injected.

The default environment is `development` to run it in another environment run the following command:

```
NODE_ENV=test gulp serve
```
The config files are automatically generated when running `gulp serve` or `gulp test`.