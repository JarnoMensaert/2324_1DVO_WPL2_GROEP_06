import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: JSON.parse(localStorage.getItem('favorites')) || {},
    }),
    actions: {
        toggleFavorite(productid) {
            if (this.favorites[productid]) {
                this.removeFavoriteFromLocalStorage(productid);
            } else {
                this.favorites[productid] = true;
                this.saveFavoritesToLocalStorage();
            }
        },
        isFavorite(productid) {
            return !!this.favorites[productid];
        },
        saveFavoritesToLocalStorage() {
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        removeFavoriteFromLocalStorage(productid) {
            delete this.favorites[productid];
            this.saveFavoritesToLocalStorage();
        }
    },
    persist: true,
});
