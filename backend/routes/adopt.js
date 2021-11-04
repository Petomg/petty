var express = require('express');
var router = express.Router();
const adopt_db = require("../database/publications");

/* GET home page. */

//Listar publicaciones: Devolver array de publicaciones en json.

TABLE_NAME = 'adopt_pubs';

router.get('/', async function(req, res, next) {
  const response = await adopt_db.get_all_pubs(TABLE_NAME);
  res.json(response);
});


//Agregar publicacion.
router.post('/add', async function(req, res, next) {
  let title = req.body.title;
  let description = req.body.description;

  await adopt_db.add_adopt_pub(title, description);

  res.send("Agregado con exito");
});





module.exports = router;
