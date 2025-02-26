import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useMainStore = create(
	persist(
		(set) => ({
			//Basket setting with add / remove function
			basket: [],
			addToBasket: (item) => set((state) => {
				// Check if the item is already in the basket
				const isAlreadyInBasket = state.basket.some((basketItem) => basketItem.name === item.name);
				// If it's already in the basket, don't add it again
				if (isAlreadyInBasket) return state;
				return { basket: [...state.basket, item] };
			}),
			removeFromBasket: (val) => set((state) => ({
				basket: state.basket.filter((_, index) => index !== val) // Remove item by index
			})),
		}),
		{
			name: 'basket-storage',
			getStorage: () => sessionStorage
		}
	)
)
export default useMainStore;