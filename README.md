Note:  DEPRECATED in favor of MongoDB back end.

[![CircleCI](https://circleci.com/gh/LD4P/sinopia_server.svg?style=svg)](https://circleci.com/gh/LD4P/sinopia_server)

# Sinopia Server

This is the repository for the Sinopia Server, namely, the Server that persists and support CRUD operations against Sinopia resources (see [here](https://ld4p.github.io/sinopia/models) for resource models). The Sinopia Server consists of:

- LDP Server via the [Trellis-Ext-Db Codebase (release 0.2.2)](https://github.com/trellis-ldp/trellis-ext-db).
- [Swagger specification](swagger.yaml) that constrains interactions and expectations on top of the LDP Server ReST API Endpoint.
- Server integration testsuite driveny by the Swagger specification.
- Authn and Authz handling (being explored at present).
- And documentation on how to autogenerate Sinopia Server client based on the Swagger specification as well as how to locally run and deploy to AWS the Sinopia Server leveraging Docker.

This is all a work in progress, and the following indicates the documentation we are currently writing as implementation decisions are made.

## Local Development Set up

### With Docker & Docker-Compose

Using the `docker-compose.yml` file and `trellis/etc/` directory at the top level of this repository, you can spin up a container of postgres and trellis, run the trellis database migration job, and have access to the Sinopia Server (here, just straight trellis) at http://localhost:8080. The following command sets this up:

```sh
$ docker-compose up # add the '-d' flag to daemonize and run in background
```

Or, to spin up Trellis and its dependencies with the Sinopia container structure (root, repository, and group containers) and ACLs (declared on root container) pre-created, you can do using the `platformdata` docker-compose service:

```shell
# Add -d flag to run containers in background
$ docker-compose up platformdata
```

**NOTE**: In order for the above to work, you will need to set `COGNITO_ADMIN_PASSWORD`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` in a file named `.env` in the sinopia_server root.

Give this command a few seconds to run; it will remain running in the shell you started it in. When you want to close it down, `cntl + c` will stop the server, then run:

```sh
$ docker-compose down
```

The above command stops and destroys the images created. This is helpful if you wish to register new docker-compose changes between runs.

### Without Docker

Trellis (with relational backend) serves the majority of the Sinopia Server functions as specified in the Swagger spec described above. Below are some starter steps for running Trellis locally with Postgres, for expansion as we 1. add on functions we need to our fork of Trellis; 2. generate specifications & functional tests for our Sinopia data models; 3. write the needed services & codebases that will be sitting beside Trellis, serving the Server API routes we need.

Here are started instructions for setting up and running locally an instance of Trellis with a relational backend (Postgres). You need to have Postgres installed locally and running.

See the official Postgres installation instructions here: https://www.postgresql.org/download/ (note a homebrew option existing for Mac OSX users).

See the official Trellis manual installation instructions here: https://github.com/trellis-ldp/trellis/wiki/Manual-Installation

**Spin-up Steps:**

1. With local Postgres running, create the needed Postgres database & Postgres user:
    1. `$ createdb sinopia` (using the postgresql package's binaries)
    2. `$ createuser sinopia` (using the postgresql package's binaries)
    3. `$ psql postgres` to enter the postgresql shell to enter:
    4. `alter user sinopia with encrypted password 'S1n0p1a';` and
    5. `grant all privileges on database sinopia to sinopia;`. Then get out of the postgresql shell (using `\q`)
2. Download a Trellis-DB [release from the Github repository](https://github.com/trellis-ldp/trellis-ext-db/releases). These steps are tested with release 0.1.1.
3. Unzip that Trellis-DB zip file in a directory where the user running this can run the server from the CLI user(s).
4. Run the needed Trellis database migration by running `$ ./bin/migrate`.
5. Within the Trellis-DB files:
  1. update `/etc/trellis.service` to point to the directory where Trellis-DB is running.
  2. update `/etc/environment` if needed (_this is optional_) for environmental concerns with Java runtime configurations.
  3. update `/etc/config.yml` to use the appropriate Postgres JDBC URL, Postgres database, and Postgres user.
  4. also update `/etc/config.yml` to point at the appropriate directories where logs & Trellis data will be kept.
  5. finally, add some Trellis users to `/etc/users.auth` for WebACL permissions.
6. Run the server by running `$ ./bin/trellis-db server ./etc/config.yml`.

Trellis should be available at: http://localhost:8080 And there is a built-in Trellis health check here: http://localhost:8081/healthcheck.

## Sinopia Server Integration Testing

To run the full test suite, you'll need to supply some credentials for a real Amazon Cognito user that has access to Sinopia, because part of the integration testing is obtaining a real JWT to test Auth'n interactions with Trellis.  You'll also need to supply the user pool id info.  This info is specified via environment variables.

In local development, you can do this by providing the env vars inline when invoking the tests, e.g.:
```sh
AUTH_TEST_USER='user@domain.edu' AUTH_TEST_PASS='1337secrets' AUTH_TEST_USER_POOL_ID='us-north-5_ABc1De234' AUTH_TEST_CLIENT_ID='blargh' npm run test
```

For the Circle CI tests, the env vars are already defined in the project contect.


## AWS Deployment Set Up

WIP.


## Working with the Open API (aka Swagger) Specification

### Use of Swagger with Trellis - LDP

Our Swagger spec illustrates the subset of LDP actions supported by "Sinopia Server" (which at this point, is still just our specific configuration and usage of trellis-ext-db as a linked data store).

### Use of Swagger with Testing Framework

We're implementing integration tests (using the swagger-codegen stubs as a starting point, and adding other things as needed).  These tests use the sinopia_client JS code against a dockerized trellis-ext-db instance to illustrate our usage of trellis-ext-db as the Sinopia backend.

### Swagger Documentation

See the Specification-driven API documentation here: https://ld4p.github.io/sinopia_server/

### Installing swagger-codegen

[swagger-codegen-2.4.8](https://github.com/swagger-api/swagger-codegen/releases/tag/v2.4.8) is the latest version of swagger-codegen that supports the Javascript language and parses this project's Swagger spec without error.  You can obtain the JAR file you need from:
* https://mvnrepository.com/artifact/io.swagger/swagger-codegen-cli/2.4.8 (Maven Repository info page)
* http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.8/swagger-codegen-cli-2.4.8.jar (direct download link)

The following commands assume the swagger-codegen JAR file is in the same directory as the swagger.yaml
file (and where applicable, the output directory for the generated client code, i.e. you downloaded the
JAR file to this project's root directory).  Tested with Java 1.8.0_102, YMMV with earlier versions.

### Validating the Swagger spec

If you'd like to validate the swagger.yaml file, you can do so by running:

```sh
java -jar swagger-codegen-cli-2.4.8.jar validate -i swagger.yaml
```

### Generating/Publishing the Sinopia Server Client

#### (Re-)Generating the Sinopia Server Javascript Client with swagger-codegen CLI

```sh
$ java -jar swagger-codegen-cli-2.4.8.jar generate -i swagger.yaml -l javascript --additional-properties usePromises=true -o sinopia_client/
```

If you want to regenerate test stubs, you'll have to delete the `sinopia_client/test` directory first -- swagger-codegen won't overwrite it if it exists.  You'll then have to `git add -p` the new stubs (and any other desirable changes), and ditch any erasure of the old tests that you want to keep, before committing.  swagger-codegen can't merge its freshly generated stubs with the added and implemented tests, so that will have to be done manually.

Other things to do when committing after regenerating the client code:
* As with the tests, manually keep any `sinopia_client/src` modifications that are still desirable.  In general, you should avoid modifying the generated code if at all possible.
  * As of this writing (2019-11-08), two operations have been modified to add default values for the `Link` header, per the swagger spec, because swagger-codegen did not produce code which properly set default header values per the spec.
* Selectively incorporate any auto-generated changes to `package.json`.  You'll likely want to keep e.g. the version bump.  But `swagger-codegen` will likely lose the test dependencies we've added, and will likely revert package versions to versions that are out of date.

You'll likely incorporate most of the auto-generated changes, but they should be manually vetted.

For an example PR where the spec was modified and client code was regenerated, see:  https://github.com/LD4P/sinopia_server/pull/119

Notes about codegen tools that don't work as of 2019-11-08:
* Swagger Codegen 3.x (3.0.13 as of this writing) has recently added experimental support for generated javascript clients, but it crashes with a missing template error when we try to use it.
* A fork of the Swagger Codegen 2.x line, [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/qna.md) was tried (4.x and 5.x), but it generated code that failed to allow override of the default `Content-Type` header from `application/ld+json` for the `createResource` operation, and more modification of the generated code seemed unesirable.
* Hence, we're currently stuck on Swagger Codegen 2.4.8.

For a slightly different approach to using swagger-codegen with an Open API v3.0 spec, not necessarily with this project, see the prior version of this README section here:  https://github.com/LD4P/sinopia_server/tree/3880d034a9611cdf657e21c63a43ea0abf6c0201#generating-sinopia-server-client-with-swagger

#### Publishing the updated client code

You'll likely want to bump the version on the spec (before regenerating!) and re-push the updated client code to NPM, e.g. for consumption by the
sinopia_editor project.  You can do this by `cd`ing into the client directory and publishing:

```sh
$ cd sinopia_client
$ npm publish
```

This requires publishing rights on https://www.npmjs.com/package/sinopia_server

## Rebuilding our (Sinopia-specific) trellis-ext-db image and pushing to Docker Hub

The CircleCI build is configured to perform these steps automatically on any successful build on the `master` branch that touches files that should trigger a rebuild/repush. This updates the `latest` tag.

 To create a release tag, you can do this via (substituting 1.3.0 with the appropriate version):


```shell
$ docker build -f Dockerfile.trellis-ext-db -t ld4p/trellis-ext-db:1.3.0 .
$ docker push ld4p/trellis-ext-db:1.3.0  # assumes user is logged into docker hub account via 'docker login' command
```

**NOTE**:
* The `docker push` action requires push access to the [ld4p Docker Hub organization](https://hub.docker.com/u/ld4p).
* We have been using the latest Sinopia editor version as the version above.
