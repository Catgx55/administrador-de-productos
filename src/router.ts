import { Router } from "express"
import { createProduct } from "./handlers/product"
import { body } from "express-validator"

const router = Router()

//Routing
router.get('/', (req, res) => {
    res.json('Desde GET')
})

router.post('/', 
    // validación
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede estar vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El price del producto no puede estar vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),

    createProduct

)

router.put('/', (req, res) => {
    res.json('Desde PUT')
})

router.patch('/', (req, res) => {
    res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
    res.json('Desde DELETE')
})

export default router