import { defineStore } from 'pinia';

export const useWinkelStore = defineStore({
    id: 'winkel',
    state: () => ({
        winkelMandje: JSON.parse(localStorage.getItem('winkelMandje')) || [],
        isLoggedIn: false,
    }),
    actions: {
        add(product) {
            // Check if the product already exists in the winkelMandje
            const existingProductIndex = this.winkelMandje.findIndex(item => item.productid === product.productid);

            if (existingProductIndex !== -1) {
                // If the product already exists, update its quantity
                this.winkelMandje[existingProductIndex].quantity++;
            } else {
                // If the product does not exist, add it to the winkelMandje
                product.quantity = 1; // Add quantity property
                this.winkelMandje.push(product);
            }

            localStorage.setItem('winkelMandje', JSON.stringify(this.winkelMandje));
            this.isLoggedIn = true;
        }
    ,
        deleteProduct(index) {
            this.winkelMandje.splice(index, 1);
            localStorage.setItem('winkelMandje', JSON.stringify(this.winkelMandje));
            if (this.winkelMandje.length === 0) {
                this.isLoggedIn = false;
            }
        },
        updateQuantity(payload) {
            this.winkelMandje[payload.index].quantity = payload.quantity;
            localStorage.setItem('winkelMandje', JSON.stringify(this.winkelMandje));
        },
        clearWinkelmandje() {
            this.winkelMandje = [];
            localStorage.removeItem('winkelMandje');
            this.isLoggedIn = false;
        },
    },
});