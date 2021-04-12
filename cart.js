const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [
        {
            id_product: 123,
            product_name: "доска",
            price: 300,
            quantity: 1
        },
        {
            id_product: 789,
            product_name: "бревно",
            price: 500,
            quantity: 1
        },
        {
            id_product: 456,
            product_name: "брус",
            price: 700,
            quantity: 1
        }
    ],
    init() { 
        this.cartListBlock = document.querySelector(selectors '.cart-list');
        this.clearCartButton = document/querySelector(selectors '.cart-btn');
        this.clearCartButton.addEventListenner('click', () =>  this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAjacentHTML(where: 'beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAjacentHTML(where: html: 'В корзине ${this.goods.lenght} позиций(a) стоимостью ${this.getCartPrise()}}');
        } else {
            this.cartListBlock.textContent = 'Корзина пуста'
        }
     },
    getCartPrice() { 
        return this.goods.reduce(function (price: number , good: {...}) {
            return price = good.price *good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods =[];
        this.render();
     },

},