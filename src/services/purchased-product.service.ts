import express, { Request, Response } from 'express';
import PurchasedProductService from './purchased-product.service';
import { IPurchasedProduct } from '../models/purchased-product.model';

const router = express.Router();

// Ruta para crear un producto comprado
router.post('/', async (req: Request, res: Response) => {
  try {
    const purchasedProduct: IPurchasedProduct = await PurchasedProductService.createPurchasedProduct(req.body);
    res.status(201).json(purchasedProduct);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Ruta para obtener todos los productos comprados
router.get('/', async (req: Request, res: Response) => {
  try {
    const purchasedProducts: IPurchasedProduct[] = await PurchasedProductService.getAllPurchasedProducts();
    res.status(200).json(purchasedProducts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Ruta para obtener un producto comprado por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const purchasedProduct: IPurchasedProduct | null = await PurchasedProductService.getPurchasedProductById(req.params.id);
    if (!purchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json(purchasedProduct);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Ruta para actualizar un producto comprado
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPurchasedProduct: IPurchasedProduct | null = await PurchasedProductService.updatePurchasedProduct(req.params.id, req.body);
    if (!updatedPurchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json(updatedPurchasedProduct);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Ruta para eliminar un producto comprado
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedPurchasedProduct: IPurchasedProduct | null = await PurchasedProductService.deletePurchasedProduct(req.params.id);
    if (!deletedPurchasedProduct) {
      return res.status(404).json({ message: 'Purchased product not found' });
    }
    res.status(200).json({ message: 'Purchased product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;
