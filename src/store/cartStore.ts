import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string; // Composite of productId-variantId
  productId: string;
  variantId: string;
  nameTr: string;
  variantLabel: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartToastNotification {
  id: string;
  item: CartItem;
  quantityAdded: number;
  totalQuantity: number;
}

interface CartState {
  items: CartItem[];
  notification: CartToastNotification | null;
  setNotification: (notification: CartToastNotification | null) => void;
  clearNotification: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      notification: null,
      setNotification: (notification) => set({ notification }),
      clearNotification: () => set({ notification: null }),
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.id === item.id);
        let updatedItems: CartItem[];
        let totalQuantity = item.quantity;

        if (existingItem) {
          totalQuantity = existingItem.quantity + item.quantity;
          updatedItems = state.items.map(i => 
            i.id === item.id ? { ...i, quantity: totalQuantity } : i
          );
        } else {
          updatedItems = [...state.items, item];
        }

        return { 
          items: updatedItems,
          notification: {
            id: Date.now().toString(),
            item,
            quantityAdded: item.quantity,
            totalQuantity,
          }
        };
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),
      updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
          return { items: state.items.filter(i => i.id !== id) };
        }
        return {
          items: state.items.map(i => 
            i.id === id ? { ...i, quantity } : i
          )
        };
      }),
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'nazar-pilic-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
