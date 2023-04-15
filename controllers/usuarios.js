import { response, request } from 'express'



const usuariosGet = (req = request, res = response) => {

    // const query = req.query;
    const {api, nombre='no name'} = req.query;

    res.json({
        msg: 'get API controller',
        api,
        nombre
    })
};
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API controller',
        nombre,
        edad,
    })
};
const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put API controller',
        id
    })
};
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Delete API controller'
    })
};


export {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}