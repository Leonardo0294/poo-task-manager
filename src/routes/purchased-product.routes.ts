import express, { Request, Response, NextFunction } from 'express';
import PurchasedProductService from '../services/purchased-product.service';

// Crear un enrutador
const router = express.Router();

// Ruta para crear un producto comprado
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const purchasedProduct = await PurchasedProductService.createPurchasedProduct(req.body);
    res.status(201).json(purchasedProduct);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todos los productos comprados
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const purchasedProducts = await PurchasedProductService.getAllPurchasedProducts();
    res.status(200).json(purchasedProducts);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener un producto comprado por ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const purchasedProduct = await PurchasedProductService.getPurchasedProductById(req.params.id);
    if (!purchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json(purchasedProduct);
  } catch (error) {
    next(error);
  }
});

// Ruta para actualizar un producto comprado
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedPurchasedProduct = await PurchasedProductService.updatePurchasedProduct(req.params.id, req.body);
    if (!updatedPurchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json(updatedPurchasedProduct);
  } catch (error) {
    next(error);
  }
});

// Ruta para eliminar un producto comprado
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedPurchasedProduct = await PurchasedProductService.deletePurchasedProduct(req.params.id);
    if (!deletedPurchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json({ message: 'Purchased product deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
