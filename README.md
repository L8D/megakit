<p align="center">
  <img alt="megakit" src="megakit.jpg" width="200">
</p>

<h1 align="center">megakit</h1>

<p align="center">
  A tool for bootstrapping large JavaScript projects
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/megakit"><img alt="NPM Status" src="https://img.shields.io/npm/v/megakit.svg?style=flat"></a>
  <a href="https://travis-ci.org/L8D/megakit"><img alt="Travis Status" src="https://img.shields.io/travis/L8D/megakit/master.svg?style=flat&label=travis"></a>
</p>

## Getting Started

Let's start by running the `init` command to initialize a new Megakit project.

```sh
$ npx megakit init
```

<!-- TODO: gif demo -->

## Usage

Now that you have initialized your project, you can create a new package with
the `add` command.

```sh
$ npx megakit add
```

<!-- TODO: gif demo -->

## TODO: Opt-in Recipes

- Linting tools: [Standard](https://github.com/standard/standard), [ESLint](https://github.com/eslint/eslint), [TSLint](https://github.com/palantir/tslint)
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for pre-commit linting
- Pre-commit prompting for [lerna-friendly commitizen commits](https://github.com/atlassian/cz-lerna-changelog) and [semantic release](https://github.com/atlassian/lerna-semantic-release)
- [EditorConfig](https://editorconfig.org)
- .gitignore
- Make-friendly aliases for task running
- Engine stamping for Yarn or npm with engine enforcement
- CI services: [Travis CI](https://travis-ci.org), [CircleCI](https://circleci.com), [GitLab CI](https://docs.gitlab.com/ee/ci/README.html)
- A system for keeping package templates checked-in

## See Also

Megakit powers your monorepo with [Lerna](https://github.com/lerna/lerna)! Be
aware of how to use it.
