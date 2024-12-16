Websites for AC Business Media
===
This monorepo contains the codebase for websites managed by AC Business Media. All sites within this repository utilize the [@parameter1/mindful-web](https://github.com/parameter1/mindful-web) packages, most notably `marko-web` and `web-cli`.

## Requirements
To use this repository, you must have a NodeJS 14.21 environment or Docker Compose (v1.29.0+) (preferred).

### Environment variables
The following categories identify the required environment values for this project. Unless specified, these values can be customized by creating a `.env` file at the root of the project and specifying the value in the standard INI format:
```
FOO=bar
```

#### Required, all environments
These environment variables must be specified to boot the project. Default values for these are specified in the docker compose service definitions.

- `NODE_ENV`
- `TENANT_KEY`
- `SITE_ID`
- `GRAPHQL_URI`

#### Required, production env only
These values are required in the production environment and can be faked for local development. Default values for these are faked in the docker compose service definitions.

- `OMEDA_APP_ID`
- `OMEDA_INPUT_ID`
- `NEW_RELIC_LICENSE_KEY`

#### Optional, feature-specific

- `NEW_RELIC_ENABLED`
- `OMEDA_APP_ID`
- `OMEDA_INPUT_ID`
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
- `SPEC_GUIDE_DOCS_API_KEY`
- `SENDGRID_API_KEY`
- `SENDGRID_DEV_TO`
- `IDENTITYX_API_TOKEN`
- `BASE_BROWSE_GRAPHQL_URI`
- `OEMBED_URI`
- `RSS_URI`
- `SITEMAPS_URI`

# Developing

## Docker Compose

To get started, execute the `./scripts/yarn.sh` file to install this projects dependencies. Once complete, use the relevant docker-compose service name with the Docker compose `up` command:

```sh
docker compose up fl
docker compose up fcp
docker compose up gip
docker compose up oem
docker compose up sso
docker compose up sdc
```

## Native Node.JS
To use in a native node environment, run `yarn` from the project root, then use the `dev` command of the `mindful-web-website` CLI from the site folder:
```sh
yarn install --pure-lockfile
cd sites/foodlogistics.com
./node_modules/.bin/mindful-web-website dev index.js
```

Note the default values currently specified for each service within the docker-compose file -- these values must be present within your `env` in order to successfully boot the project!
