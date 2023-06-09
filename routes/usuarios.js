
import { Router } from 'express'
import { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } from '../controllers/usuarios.js';

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);




export default router;