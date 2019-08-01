const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

/**
* Runs a Postgres script (.sql file) with appropriate script psql options.
*
* @param {object} options
* @param {string} options.dbName - The name of the target db.
* @param {string} options.file - The path to the .sql file.
*/
module.exports = async function runPgScript({ dbName, file }) {
  const opts = '--no-psqlrc --set ON_ERROR_STOP=1 --pset pager=off --single-transaction';
  const command = `psql --dbname ${dbName} --file ${file} ${opts}`;

  try {
    const { stdout, stderr } = await execAsync(command);

    if (stdout) {
      console.log('STDOUT:\n' + stdout);
    }

    if (stderr) {
      console.log('STDERR:\n' + stderr);
    }

  } catch(err) {
    console.log(`FAILED TO RUN SCRIPT: ${err}`);
  }
};
