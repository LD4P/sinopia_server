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

WIP.

### Without Docker

Trellis (with relational backend) serves the majority of the Sinopia Server functions as specified in the Swagger spec described above. Below are some starter steps for running Trellis locally with Postgres, for expansion as we 1. add on functions we need to our fork of Trellis; 2. generate specifications & functional tests for our Sinopia data models; 3. write the needed services & codebases that will be sitting beside Trellis, serving the Server API routes we need.

Here are started instructions for setting up and running locally an instance of Trellis with a relational backend (Postgres). You need to have Postgres installed locally and running.

See the official Postgres installation instructions here: https://www.postgresql.org/download/ (note a homebrew option existing for Mac OSX users).

See the official Trellis manual installation instructions here: https://github.com/trellis-ldp/trellis/wiki/Manual-Installation

### Spin-up Steps

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

WIP.

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

### How to Generate a Sinopia Server Client

#### Javascript

#### Go
