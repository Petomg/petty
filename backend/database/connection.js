// Proper way to initialize and share the Database object

// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://peto:peto123@localhost:5432/petty';

// Creating a new database instance from the connection details:
const db = pgp(cn);


// Exporting the database object for shared use:
module.exports = db;