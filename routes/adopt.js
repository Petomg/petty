var express = require('express');
var router = express.Router();
const adopt_db = require("../database/publications");

/* GET home page. */

//Listar publicaciones: Devolver array de publicaciones en json.

TABLE_NAME = 'adopt_pubs';

router.get('/', function(req, res, next) {
  return adopt_db.get_all_pubs(TABLE_NAME).then((response) => console.log(response));
});


//Agregar publicacion.
router.post('/add', function(req, res, next) {
  let title = req.body.title;
  let description = req.body.description;

  adopt_db.add_adopt_pub(title, description);
});





module.exports = router;
