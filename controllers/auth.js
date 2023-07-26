const express = require('express');
//const {validationResult } = require('express-validator);
const {  validationResult } = require('express-validator');
const loginUsuario = (req,res = express.response) => {
    res.json({
        message: "Bienvenido a nuestra API - Login"
    })
}
const Usuario = require('../models/Usuario')

const crearUsuario = async (req,res = express.response) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    
    const usuario = new Usuario(req.body);
    await usuario.save();

   /*  if (password.length < 6) {
       return res.status(400).json({error: "La contraseña debe tener al menos 6 caracteres"});
    } */

   return res.status(200).json({
        message: "Creación del usuario realizada",
        user: req.body
        
    })
}

const renovarToken = (req,res = express.response) => {
    console.log('Request received');
    res.json({
        message: "Renovamos tu permiso con este token"
    })
}

module.exports = {
    crearUsuario,
    renovarToken,
    loginUsuario
}