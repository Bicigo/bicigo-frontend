import { Product } from '../types/product';

export const getFeaturedProducts = (): Product[] => [
  { id: 1, name: "Bici Urbana", price: 339999, image: "/assets/bici1.jpg" },
  { id: 2, name: "Mountain Bike", price: 449999, image: "/assets/bici2.jpg" },
  { id: 3, name: "Plegable", price: 299999, image: "/assets/bici3.jpg" },
  { id: 4, name: "BMX", price: 279999, image: "/assets/bici4.jpg" }
];
