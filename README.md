# run-pg-script
Run Postgres scripts using `psql` the right way.

Applies the appropriate options for running scripts through psql.

## Installation
```javascript
npm install
```

## Usage
```javascript
const runPgScript = require('run-pg-script');

runPgScript({
  dbName: 'my-db',
  file: `${__dirname}/schema/base-schema.sql`)
});
```

## Default options
Runs your scripts using the following `psql` options:

`--no-psqlrc`: No need for custom formatting if you're just running a script.
`--set ON_ERROR_STOP=1`: Stop the script if there's an error.
`--pset pager=off`: No need for a pager when we're running a script.
`--single-transaction`: Run the script as a single transaction.
