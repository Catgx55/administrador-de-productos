import { Router } from "express"
import { createProduct, deleteProduct, getProducts, getProductsById, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

//Routing
router.get('/', getProducts)
router.get('/:id',
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    getProductsById)

router.post('/', 
    // validación
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede estar vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El price del producto no puede estar vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),
    
    handleInputErrors,
    createProduct
)

router.put('/:id',
    param('id').isInt().withMessage('ID not valid'),
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede estar vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El price del producto no puede estar vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    param('id').isInt().withMessage('ID not valid'),

    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID not valid'),

    handleInputErrors,
    deleteProduct
)

export default router