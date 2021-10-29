const db = require("./connection");


/*db.none('CREATE TABLE adopt_pubs ( \
   id SERIAL,   \
   title varchar(128) NOT NULL,   \
   descripcion varchar(512));');*/

async function get_all_pubs(table_name){
    let data_f = {};
    await db.any("SELECT * FROM adopt_pubs")
    .then((data) => {
        data_f = data;
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

    return data_f;
}


async function add_adopt_pub(title, description){
	await db.none('INSERT INTO adopt_pubs(title, descripcion) VALUES($1, $2)', [title, description])
	.then(function (data) {
        console.log(`Se agrego: ${title}`);
    })
	.catch(function (error) {
        console.log("ERROR:", error);
    }); 
}


module.exports = {
  get_all_pubs,
  add_adopt_pub,
};