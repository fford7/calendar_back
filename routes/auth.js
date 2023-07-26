/* const express = require('express');
const router = express.Router();
 */

const { check } = require('express-validator');


const { Router } = require('express');
const { 
    loginUsuario,
    crearUsuario,
    renovarToken 
} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/', loginUsuario)
router.post('/new', 

[
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password debe tener al menos 8 caracteres').isLength({min:8}),
    check('email', 'El correo no es valido').isEmail(),
    validarCampos
],

crearUsuario)
router.post('/renew', renovarToken)

module.exports = router;

