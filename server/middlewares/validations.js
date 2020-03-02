const { check } = require ('express-validator/check')


const validationAddCampaign = [
    check('nombre').not().isEmpty().withMessage("El nombre no puede estar vacio"),
    check('ejecucion').isIn('automatico', 'manual'),
    check('fecha_inicio').isIn('automatico', 'manual'),
    check('rel_medios').not().isEmpty().isIn(1, 2 ,3 ,4).withMessage("Debe seleccionar algun tipo de medio de ejecución"),

]
