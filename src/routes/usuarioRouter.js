const usuarioRouter = require('express').Router();


//ver usurios
usuariosController.verUsuarios = (req, res) => {
    return res.json(lista_Usuarios);

}
//ver ususrio
usuariosController.verUsuario = (req, res) => {
    return res.json({mensaje:"ver uno usuario"});

}
//crear usuario
usuariosController.crearUsuario = (req, res) => {
    return res.json({mensaje:"crea usuario"});

}
//actualizar usuario
usuariosController.updateUsuario = (req, res) => {
    return res.json({mensaje:"modificar usuario"});

}
//eliminar usuario
usuariosController.deleteUsuario = (req, res) => {
    return res.json({mensaje:"delete usuario"});

}