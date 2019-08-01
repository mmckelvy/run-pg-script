# run-pg-script
Run Postgres scripts using `psql` the right way.

Applies the appropriate options for running scripts through psql.

# Installation
```javascript
npm install
```

# Usage
```javascript
const runPgScript = require('run-pg-script');

runPgScript({
  dbName: 'my-db',
  file: `${__dirname}/schema/base-schema.sql`)
});
```
