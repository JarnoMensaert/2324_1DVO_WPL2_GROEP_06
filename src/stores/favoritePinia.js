import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: JSON.parse(localStorage.getItem('favorites')) || {}, // Load favorites from local storage
    }),
    actions: {
        toggleFavorite(productid) {
            if (this.favorites[productid]) {
                this.removeFavoriteFromLocalStorage(productid); // Remove from favorites if already present
            } else {
                this.favorites[productid] = true;
                this.saveFavoritesToLocalStorage(); // Save favorites to local storage after toggling
            }
        },
        isFavorite(productid) {
            return !!this.favorites[productid];
        },
        saveFavoritesToLocalStorage() {
            localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Save favorites to local storage
        },
        removeFavoriteFromLocalStorage(productid) {
            delete this.favorites[productid];
            this.saveFavoritesToLocalStorage(); // Save favorites to local storage after removing
        }
    },
    persist: true, // Enable persistence to local storage
});
