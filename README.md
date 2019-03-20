[![CircleCI](https://circleci.com/gh/LD4P/sinopia_server.svg?style=svg)](https://circleci.com/gh/LD4P/sinopia_server)

# Sinopia Server

This is the repository for the Sinopia Server, namely, the Server that persists and support CRUD operations against Sinopia resources (see [here](https://ld4p.github.io/sinopia/models) for resource models). The Sinopia Server consists of:

- LDP Server via the [Trellis-Ext-Db Codebase (release 0.1.1)](https://github.com/trellis-ldp/trellis-ext-db).
- [Swagger specification](swagger.yaml) that constrains interactions and expectations on top of the LDP Server ReST API Endpoint.
- Server integration testsuite driveny by the Swagger specification.
- Authn and Authz handling (being explored at present).
- And documentation on how to autogenerate Sinopia Server client based on the Swagger specification as well as how to locally run and deploy to AWS the Sinopia Server leveraging Docker.

This is all a work in progress, and the following indicates the documentation we are currently writing as implementation decisions are made.

## Local Development Set up

### With Docker & Docker-Compose

Using the `docker-compose.yml` file and `trellis/etc/` directory at the top level of this repository, you can spin up a container of postgres and trellis, run the trellis database migration job, and have access to the Sinopia Server (here, just straight trellis) at http://localhost:8080. The following command sets this up:

```
$ docker-compose up
```

Give this command a few seconds to run; it will remain running in the shell you started it in. When you want to close it down, `cntl + c` will stop the server, then run:

```
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

## Sinopia Server Testing

To run the full test suite, you'll need to supply some credentials for a real Amazon Cognito user that has access to Sinopia, because part of the integration testing is obtaining a real JWT to test Auth'n interactions with Trellis.  You'll also need to supply the user pool id info.  This info is specified via environment variables.

In local development, you can do this by providing the env vars inline when invoking the tests, e.g.:
```sh
AUTH_TEST_USER='user@domain.edu' AUTH_TEST_PASS='1337secrets' AUTH_TEST_USER_POOL_ID='us-north-5_ABc1De234' AUTH_TEST_CLIENT_ID='blargh' npm run test
```

For the Circle CI tests, the env vars are already defined in the project contect.

### Sinopia Server Integration Tests

### Trellis Integration Tests

### Sinopia Server Unit Tests

### Trellis Unit Tests

### Circle-CI Integration Testing Setup


## AWS Deployment Set Up

WIP.

## Working with the Open API Specification (aka Swagger) Specification

WIP.

### Use of Swagger with Trellis - LDP

### Validating Swagger

### Use of Swagger with Testing Framework

### Swagger Documentation

See the Specification-driven API documentation here: https://ld4p.github.io/sinopia_server/

### Generating Sinopia Server Client with Swagger

#### Generating a Javascript Client API with swagger-codegen cli

[swagger-codegen-2.3.1](https://github.com/swagger-api/swagger-codegen/releases/tag/v2.3.1) is the latest version of swagger-codegen that supports the javascript language.

1. Obtain the openapi.yaml file that you will be using. (https://editor.swagger.io/ has a utility to convert a JSON spec to a YAML spec.)
- On the first line of the YAML spec change: `openapi: 3.0.1` to: `swagger: 3.0.1`
- Download and the unzip the [v2.3.1](https://github.com/swagger-api/swagger-codegen/archive/v2.3.1.zip) zip file, then:
- run the following (mvn package will take a little while to run)

```
$> cd swagger-codegen-2.3.1
$swagger-codegen-2.3.1/> ./run-in-docker.sh mvn package
$swagger-codegen-2.3.1/> mkdir client_api
$swagger-codegen-2.3.1/> ./run-in-docker.sh generate -i openapi.yaml -l javascript --additional-properties usePromises=true -o client_api/
$swagger-codegen-2.3.1/> cp -r client_api /path/to/project/location/
```

(See: https://github.com/swagger-api/swagger-codegen#docker)
